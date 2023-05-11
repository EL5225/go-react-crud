package controllers

import (
	"github.com/RianIhsan/ex-go-crud-icc/config"
	"github.com/RianIhsan/ex-go-crud-icc/models"
	"github.com/gofiber/fiber/v2"
)

func ReadAll(c *fiber.Ctx) error {
	var data []models.User

	config.DB.Find(&data)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Berhasil mengambil semua data",
		"data":    data,
	})
}

func Read(c *fiber.Ctx) error {

	var data models.User

	id := c.Params("id")

	if id == "" {
		c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Id",
		})
		return nil
	}

	if err := config.DB.Where("id = ?", id).First(&data).Error; err != nil {
		c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Data tidak ditemukan",
		})
		return nil
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Data berhasil ditemukan",
		"data":    data,
	})

}

func Create(c *fiber.Ctx) error {
	var user = new(models.UserReq)

	if err := c.BodyParser(user); err != nil {
		return err
	}

	newUser := models.User{
		Nama:     user.Nama,
		Kelas:    user.Kelas,
		Semester: user.Semester,
		Prodi:    user.Prodi,
		Wa:       user.Wa,
	}

	if err := config.DB.Create(&newUser).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Gagal membuat data baru",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"Message": "Data Berhasil ditambahkan!",
		"user":    newUser,
	})

}

func Update(c *fiber.Ctx) error {
	var user = new(models.UserReq)

	if err := c.BodyParser(user); err != nil {
		return err
	}

	id := c.Params("id")

	if id == "" {
		c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Id",
		})
		return nil
	}

	updateUser := models.User{
		Nama:     user.Nama,
		Kelas:    user.Kelas,
		Semester: user.Semester,
		Prodi:    user.Prodi,
		Wa:       user.Wa,
	}

	if config.DB.Model(&updateUser).Where("id = ?", id).Updates(&updateUser).RowsAffected == 0 {
		c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Gagal edit data",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Data berhasil di edit!",
		"data":    updateUser,
	})

}

func Delete(c *fiber.Ctx) error {

	var user models.User

	id := c.Params("id")

	if err := config.DB.First(&user, id).Delete(&user).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Data gagal dihapus",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Data berhasil dihapus",
	})
}

package controllers

import (
	"github.com/RianIhsan/go-react-crud/database"
	"github.com/RianIhsan/go-react-crud/models"
	"github.com/gofiber/fiber/v2"
)

func Reads(c *fiber.Ctx) error {
	var user []models.User

	database.DB.Find(&user)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Data ditemukan",
		"user":    user,
	})
}

func Read(c *fiber.Ctx) error {
	var user models.User

	id := c.Params("id")

	if id == "" {
		c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Id tidak boleh kosong",
		})
	}

	if err := database.DB.Where("id = ?", id).First(&user).Error; err != nil {
		c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Data user tidak ditemukan",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Data user berhasil ditemukan",
		"user":    &user,
	})
}

func Create(c *fiber.Ctx) error {
	var userReq models.UserReq

	if err := c.BodyParser(&userReq); err != nil {
		c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	var user models.User
	user.Nama = userReq.Nama
	user.Kelas = userReq.Kelas
	user.Semester = userReq.Semester
	user.Prodi = userReq.Prodi
	user.Wa = userReq.Wa

	if err := database.DB.Create(&user).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Terjadi kesalahan saat membuat user baru",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Data berhasil ditambahkan",
		"user":    user,
	})
}

func Update(c *fiber.Ctx) error {
	userReq := new(models.UserReq)

	if err := c.BodyParser(userReq); err != nil {
		c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	userId := c.Params("id")
	user := models.User{}

	if err := database.DB.First(&user, "id = ?", userId).Error; err != nil {
		c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Data user tidak ada",
		})
	}

	user.Nama = userReq.Nama
	user.Kelas = userReq.Kelas
	user.Semester = userReq.Semester
	user.Prodi = userReq.Prodi
	user.Wa = userReq.Wa

	if err := database.DB.Save(user).Error; err != nil {
		c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Error Internal Server",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Data user berhasil diupdate",
		"data":    user,
	})

}

func Delete(c *fiber.Ctx) error {
	user := models.User{}
	userId := c.Params("id")

	if err := database.DB.First(&user, userId).Delete(&user).Error; err != nil {
		c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Data gagal dihapus",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Data user berhasil dihapus",
	})
}

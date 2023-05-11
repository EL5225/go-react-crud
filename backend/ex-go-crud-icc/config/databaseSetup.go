package config

import (
	"fmt"
	"log"
	"os"

	"github.com/RianIhsan/ex-go-crud-icc/models"
	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error file .env")
	}

	dsn := os.Getenv("DSN")

	database, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Koneksi database error")
	} else {
		fmt.Println("Koneksi database berhasil")
	}

	DB = database

	database.AutoMigrate(&models.User{})
}

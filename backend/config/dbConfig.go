package config

import (
	"fmt"
	"os"

	"github.com/RianIhsan/go-react-crud/database"
	"github.com/RianIhsan/go-react-crud/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	db_name = ""
	db_user = "root"
	db_pass = ""
	db_host = "localhost"
	db_port = "3306"
)

func BootDatabase() {
	//Check Default Database name
	if dbNameEnv := os.Getenv("DB_NAME"); dbNameEnv != "" {
		db_name = dbNameEnv
	}
	//Check Default Database user
	if dbUserEnv := os.Getenv("DB_USER"); dbUserEnv != "" {
		db_user = dbUserEnv
	}
	//Check Default Database password
	if dbPassEnv := os.Getenv("DB_PASS"); dbPassEnv != "" {
		db_pass = dbPassEnv
	}
	//Check Default Database host
	if dbHostEnv := os.Getenv("DB_HOST"); dbHostEnv != "" {
		db_host = dbHostEnv
	}
	//Check Default Database port
	if dbPortEnv := os.Getenv("DB_PORT"); dbPortEnv != "" {
		db_port = dbPortEnv
	}
}

func ConnectDB() {
	var err error

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", db_user, db_pass, db_host, db_port, db_name)
	database.DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Tidak bisa terhubung ke database!")
	} else {
		fmt.Println("Terhubung ke database")
	}
}
func RunMigration() {
	if err := database.DB.AutoMigrate(models.User{}); err != nil {
		fmt.Printf("Gagal migrasi database")
	} else {
		fmt.Printf("Data berhasil dimigrasi")
	}
}

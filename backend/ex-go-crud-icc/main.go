package main

import (
	"log"
	"os"

	"github.com/RianIhsan/ex-go-crud-icc/config"
	"github.com/RianIhsan/ex-go-crud-icc/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {
	config.ConnectDB()

	if err := godotenv.Load(); err != nil {
		log.Fatal("Eror file .env")
	}

	port := os.Getenv("PORT")

	app := fiber.New()

	//Setting cors
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:5173",
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization",
		AllowCredentials: true,
	}))

	//Setup Route
	routes.SetupRoute(app)

	app.Listen(":" + port)

}

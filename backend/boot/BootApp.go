package boot

import (
	"log"
	"os"

	"github.com/RianIhsan/go-react-crud/config"
	"github.com/RianIhsan/go-react-crud/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func BootApp() {
	//Load ENV file
	if err := godotenv.Load(); err != nil {
		log.Fatal("Tidak bisa memuat file .env")
	}

	//Check Default PORT server
	if portEnv := os.Getenv("PORT"); portEnv != "" {
		config.PORT = portEnv
	}

	config.BootDatabase()
	config.ConnectDB()
	config.RunMigration()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     config.AllowOrigins,
		AllowHeaders:     config.AllowHeaders,
		AllowCredentials: config.AllowCredentials,
	}))

	//Initialize Route
	routes.SetupRoute(app)

	//Initialize SERVER
	app.Listen(config.PORT)
}

package routes

import (
	"github.com/RianIhsan/go-react-crud/controllers"
	"github.com/gofiber/fiber/v2"
)

func runRoute(app *fiber.App) {
	app.Get("/api/user", controllers.Reads)
	app.Get("/api/user/:id", controllers.Read)
	app.Post("/api/create", controllers.Create)
	app.Patch("/api/update/:id", controllers.Update)
	app.Delete("/api/delete/:id", controllers.Delete)
}

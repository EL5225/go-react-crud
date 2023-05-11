package routes

import (
	"github.com/RianIhsan/ex-go-crud-icc/controllers"
	"github.com/gofiber/fiber/v2"
)

func SetupRoute(app *fiber.App) {
	//Mengambil semua data
	app.Get("/api/reads", controllers.ReadAll)
	//Mengabil data yang diinginkan
	app.Get("/api/read/:id", controllers.Read)
	//Membuat data baru
	app.Post("/api/create", controllers.Create)
	//Edit data
	app.Put("/api/update/:id", controllers.Update)
	//Delete data
	app.Delete("/api/delete/:id", controllers.Delete)
}

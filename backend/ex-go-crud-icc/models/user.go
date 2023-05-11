package models

type User struct {
	ID       uint   `json:"id" gorm:"primarykey"`
	Nama     string `json:"nama"`
	Kelas    string `json:"kelas"`
	Semester string `json:"semester"`
	Prodi    string `json:"prodi"`
	Wa       string `json:"wa"`
}

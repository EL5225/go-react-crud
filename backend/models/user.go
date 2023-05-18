package models

type User struct {
	ID       uint   `json:"id" gorm:"primarykey"`
	Nama     string `json:"name"`
	Kelas    string `json:"kelas"`
	Semester string `json:"semester"`
	Prodi    string `json:"prodi"`
	Wa       string `json:"wa"`
}

type UserReq struct {
	Nama     string `json:"name"`
	Kelas    string `json:"kelas"`
	Semester string `json:"semester"`
	Prodi    string `json:"prodi"`
	Wa       string `json:"wa"`
}

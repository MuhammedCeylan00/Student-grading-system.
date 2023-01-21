const db = require("../config/db");

class Student {
    async getStudent(schoolNumber) {
        console.log("istek buraya geldi");
        let results = await db.query(`SELECT * FROM studentsclasses where ogrno =  ${parseInt(schoolNumber)}`).catch(console.log);
        return results.rows;
    }
    //create a todo.
    async createStudent(data) {
        console.log("xxxx: ",data.title.length);
        for (let i=0;i<data.title.length;i++){
            await db
                .query("INSERT INTO students (ogrno, isimsoyisim) VALUES ($1, $2) ON CONFLICT (ogrno) DO NOTHING",[parseInt(data.title[i]["Öğrenci No"]),data.title[i]["Adı Soyadı"] ])
                .catch(console.log)
        }
        return

    }

    async createStudentClass(data) {
        await db
            .query("DELETE FROM studentsclasses")
            .catch()
        console.log("xxxx: ",data.title.length);
        for (let i=0;i<data.title.length;i++){
            await db
                .query("INSERT INTO studentsclasses (ogrno, namesurname, class) VALUES ($1, $2, $3) ON CONFLICT (ogrno) DO NOTHING",[parseInt(data.title[i]["ogrno"]),data.title[i]["namesurname"], data.title[i]["class"]])
                .catch(console.log)
        }
        return
    }




    //delete a todo.
    async deleteStıdent(studentId) {
        await db.query(`DELETE FROM students WHERE id=$1`, [parseInt(todoId)]).catch(console.log);
        return;
    }
}

module.exports = Student;
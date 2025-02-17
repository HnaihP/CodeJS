// Lê Phi Ánh - 2180600077
// Khai báo kiểu dữ liệu student
class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }

    // Tính điểm trung bình
    getAverageScore() {
        return (this.score1 + this.score2) / 2;
    }

    // Xếp loại sinh viên
    getRanking() {
        const avgScore = this.getAverageScore();
        if (avgScore >= 8) {
            return 'Giỏi';
        } else if (avgScore >= 6.5) {
            return 'Khá';
        } else if (avgScore >= 5) {
            return 'Trung bình';
        } else {
            return 'Yếu';
        }
    }
}

// Tạo mảng gồm 4 sinh viên
const students = [
    new Student('Lê Phi Ánh', 20, 8, 7),
    new Student('Ngô Duy Hoàng Long', 17, 5, 6),
    new Student('Trần Thị Kim Mai', 19, 4, 3),
    new Student('Phạm Minh Chính', 21, 9, 9)
];

// Sử dụng map để in ra xếp loại của từng sinh viên
students.map(student => {
    let ranking = student.getRanking();  // Dùng let để khai báo biến xếp loại
    console.log(`${student.name}: ${ranking}`);
});

// Sử dụng reduce để tính TBC điểm của lớp
let totalAverageScore = students.reduce((sum, student) => sum + student.getAverageScore(), 0) / students.length;
console.log(`Điểm trung bình của lớp: ${totalAverageScore.toFixed(2)}`);

// Sử dụng some để kiểm tra có sinh viên nào dưới 18 tuổi không
let hasUnder18 = students.some(student => student.age < 18);
console.log(`Có sinh viên dưới 18 tuổi: ${hasUnder18 ? 'Có' : 'Không'}`);

// Sử dụng every để kiểm tra tất cả sinh viên có đầy đủ tên không
let allHaveName = students.every(student => student.name !== '');
console.log(`Tất cả sinh viên có đầy đủ tên: ${allHaveName ? 'Có' : 'Không'}`);





class Human {
    constructor(name, age, dob, hobbies) { // hàm khởi tạo
        this.name = name; // key - value
        this.age = age;
        this.dob = dob;
        this.hobbies = hobbies;
    }

    walk() {
        return this.name + " is walking";
    }
}

class Student extends Human {
    constructor(name, age, dob, hobbies, avg) {
        super(name, age, dob, hobbies);
        this.avg = avg;
    }

    study() {
        return this.name + " is studying";
    }
}


const ThienKim = new Student("Thien Kim", 18, "01/01/2000", ["Reading", "Watching"], 9.0);

const HoangThong = new Human("Hoang Thong", 18, "01/01/2000", ["Reading", "Watching"]);


// username/password không được rỗng
// username/password không được nhỏ hơn 6 kí tự
// password thì có ít nhất 1 số và 1 chữ cái


class RegisterForm {
    constructor(inputTagUsername, inputTagPassword, errorLabelUsername, errorLabelPassword, submitButton) {
        this.inputTagUsername = inputTagUsername;
        this.inputTagPassword = inputTagPassword;
        this.errorLabelUsername = errorLabelUsername;
        this.errorLabelPassword = errorLabelPassword;
        this.submitButton = submitButton;
    }

    checkEmptyUsername() {
        if (!this.inputTagUsername.value) {
            this.errorLabelUsername.innerText = "Username khong duoc rong"
        }
    }

    checkEmptyPassword() {
        if (!this.inputTagPassword.value) {
            this.errorLabelPassword.innerText = "Password khong duoc rong"
        }
    }
}


const form = new RegisterForm(
    document.getElementById("username"),
    document.getElementById("password"),
    document.getElementById("username-error"),
    document.getElementById("password-error"),
    document.getElementById("submit"),
)


form.submitButton.addEventListener("click", function() {
    form.checkEmptyUsername();
    form.checkEmptyPassword();
})

export default {
    methods: {
        validatePhone(phone) {
            const re = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
            return re.test(phone);
        },
        validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        isCorrectData(info, user) {
            return info.every((item) => {
                switch (item) {
                    case "phone":
                        return this.validatePhone(user[item]);
                    case "email":
                        return this.validateEmail(user[item]);
                    default:
                        return !!user[item];
                }
            });
        },
        getNewID(users) {
            const counterID = 1;
            const lengths = users.length;
            const newID = lengths > 0 ? users[lengths - 1].id + counterID : 0;
            return newID;
        },
        pushUser(user, users) {
            user.id = this.getNewID(users);
            users.push(user);
        },
        showNewUsers(users) {
            localStorage.setItem("users", JSON.stringify(users));
            this.toMainPage();
        }
    }
}
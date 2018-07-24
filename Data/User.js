class User {
    static currentUser = "test";

    //other relevant code here

    static getCurrentUser() {
        return this.currentUser;
    }
    static setCurrentUser(str:String) {
        this.currentUser = str;
    }
}

export default User;
module.exports = { AddUser, BorrowBook, ReturnBook };
let books = [{
    bookCode: 0,
    bookName: "book0"
}, {
    bookCode: 1,
    bookName: "book1"
}, {
    bookCode: 2,
    bookName: "book2"
},];
let users = [{
    userCode: 0,
    name: "test",
    email: "test@",
    phone: "123",
},];
let borrowes = [[0, 0],];

let userCode = 1;

function AddUser(name, email, phone) {
    if (!name || !email || !phone)
        throw new Error("you miss details");
    if (!email.includes("@"))
        throw new Error("the email must be a valid email address");
    const newUser = {
        userCode: userCode,
        name: name,
        email: email,
        phone: phone,
    };
    userCode += 1;
    users.push(newUser);
    return newUser;
}


function BorrowBook(bookCode, userCode) {
    const user = users.find(user => user.userCode === userCode);
    const book = books.find(book => book.bookCode == bookCode);
    if (!book) {
        throw new Error("The book is not available for loan");
    }
    if (!user) {
        throw new Error("The user does not exist");
    }
    if (borrowes.some(entry => entry[0] === userCode && entry[1] === bookCode)) {
        throw new Error("The book is already borrowed by this user");
    }
    borrowes.push([userCode, bookCode]);
    return true
}

function ReturnBook(userCode, bookCode) {
    const user = users.find(user => user.userCode === userCode);
    const book = books.find(book => book.bookCode == bookCode);
    if (!book) {
        throw new Error("The book is not available for loan");
    }
    if (!user) {
        throw new Error("The user does not exist");
    }
    const index = borrowes.findIndex(entry => entry[0] === userCode && entry[1] === bookCode);
    if (index === -1) {
        throw new Error("No such borrowing record found");
    }
    borrowes.splice(index, 1);
    return true;
}

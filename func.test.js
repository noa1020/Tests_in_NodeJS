const { AddUser, BorrowBook, ReturnBook } = require('./func');

//AddUser tests
test('add user with name, email and phone and object with the same name', () => {
    const newUser = AddUser("noa", "email@gmail.com", "0554223");
    expect(newUser.name).toEqual("noa");
});

test('add user with name, wrong email and phone and get Eror', () => {
    expect(() => AddUser("noa", "ameil", "0554223")).toThrow();
});

test('add user with name and email and get Erors', () => {
    expect(() => AddUser("noa", "email@gmail.com").toThrow());
});

//BorrowBook tests
test('borrow book with available bookCode and userCode', () => {
    expect(BorrowBook(1, 0)).toBe(true);
});

test('borrow book with unavailable bookCode ', () => {
    expect(() => BorrowBook(5, 0)).toThrow();
});

test('Borrowing a book that has already been borrowed for the same user ', () => {
    expect(() => BorrowBook(0, 0)).toThrow();
});

//ReturnBook tests
test('Returning a book that was actually borrowed by that user ', () => {
    expect(ReturnBook(0, 0)).toBe(true);
});

test('Returning a book that does not exist ', () => {
    expect(() => ReturnBook(5, 0)).toThrow();
});

test('Returning an unborrowed book ', () => {
    expect(() => ReturnBook(2, 0)).toThrow();
});



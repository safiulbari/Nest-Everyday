import { Book } from "./data/book.dto";

export class BookService {
    public books : Book[] = [];

    // add book
    addBookService(book: Book) : string {
        this.books.push(book);
        return "Book has been successfully added";
    }

    // update book
    // delete book


}
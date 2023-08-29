import { Controller, Get, Put, Delete, Post } from '@nestjs/common';

@Controller("/book")
export class BookController{
  // add book
  @Post('/add')
  addBook() : string{
    return "this will add book";
  }
  
  // delete book
  @Delete("/delete")
  deleteBook() : string {
    return "this will deleting book";
  }

  // update book
  @Put("/update")
  updateBook() : string {
    return "this will update book";
  }

  // find all book
  @Get("/findAll")
  findAllBook() : string{
    return "Your All Books";
  }

}
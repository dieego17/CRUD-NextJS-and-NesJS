import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService){}

  /* Devuelve todos los usuarios */
  // o 
  /* Devuelve al usaurio por su nombre */
  @Get()
  getAllUsers(@Query('nombre') nombre: string) {
    if(nombre){
      return this.usersService.getOneUsersByName(nombre);
    }else{
      return this.usersService.getAllUsers()
    }
  }

  /* Devuelve un solo usuario por su id */
  @Get(':id')
  getUserByPk(@Param('id') id: string) {
    return this.usersService.getUserByPk(id)
  }

  /* Crea un nuevo usuario */
  @Post()
  createUser(@Body() user: User){
    console.log(user);
    return this.usersService.createUser(user)
  }

  /* Modifica un usuario */
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: User){
    return this.usersService.updateUser(id, user)
  }

  /* Borra un usuario */
  @Delete(':id')
  deleteUser(@Param('id') id: string){
    return this.usersService.deleteUser(id)
  }
}

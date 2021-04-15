import { Controller, Post, Body, Get, UseGuards,Put, Delete,Param} from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './user.entity';
import { JwtGuard } from '../auth/jwt.guard';
@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {

    constructor(private service: UserService) { }
    
    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() user: User) {
        return this.service.create(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}
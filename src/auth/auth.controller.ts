
import { Controller, Post, Body,UseGuards  } from  '@nestjs/common';
import { AuthService } from  './auth.service';
import { User } from  '../users/user.entity';
import { Public } from 'src/users/meta';

@Controller('auth')
export class AuthController {


    constructor(private  readonly  authService:  AuthService) {}
    @Public()
    @Post('login')
    async login(@Body() user: User): Promise<any> {
      /***cooment aded in aut hcontroller */
      return this.authService.login(user);
    }  

    @Post('register')
    async register(@Body() user: User): Promise<any> {
      return this.authService.register(user);
    }  

}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from  '@nestjs/jwt';
import { UserService } from  '../users/users.service';
import { User } from  '../users/user.entity';
@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    public  async validate(userData: User): Promise<User> {
        return await this.userService.findByEmail(userData.email);
    }

    public async login(user: User): Promise< any | { status: number }>{
        
        return this.validate(user).then((userData)=>{
         
          if(!userData){
            throw new HttpException('unauthenticated', HttpStatus.BAD_REQUEST);
          }
          let payload = {id:userData.id,email:userData.email};
          
          const accessToken = this.jwtService.sign(payload);

          return {
             expires_in: 3600,
             access_token: accessToken,
             user_id: userData.id,
             status: 200
          };

        });
    }

    public async register(user: User): Promise<any>{
        return this.userService.create(user)
    } 


}

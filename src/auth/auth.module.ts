import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { UserService } from '../users/users.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
@Module({
    imports: [TypeOrmModule.forFeature([User]),
    
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '7d' },
  })],
    providers: [UserService,AuthService,JwtStrategy],
    controllers: [AuthController],
    exports: [
      
      JwtModule
  ],
})
export class AuthModule {}
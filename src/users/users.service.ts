import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async getusers(user: User): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.userRepository.find({
           
            where: [{ "id": _id }]
        });
    }
    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                email: email,
            }
        });
    }

    async findById(id: number): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                id: id,
            }
        });
    }
    async updateUser(user: User) {
        this.userRepository.save(user)
    }
    async create(user: User): Promise<User>  {
       return await this.userRepository.save(user)
    }
    async deleteUser(user: User) {
        this.userRepository.delete(user);
    }
}
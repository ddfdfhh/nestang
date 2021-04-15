import { Module } from '@nestjs/common';
import { ProductsModule } from "./products/products.module";
import { UsersModule } from "./users/users.module";
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/jwt.guard';
import { AutomapperModule } from 'nestjsx-automapper';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'front')
    }),
    AutomapperModule.withMapper(),UsersModule,ProductsModule, OrdersModule, CategoryModule,TypeOrmModule.forRoot(), AuthModule],
  controllers: [],
  providers: [{ provide: APP_GUARD,
    useClass: JwtGuard}],
})
export class AppModule {}

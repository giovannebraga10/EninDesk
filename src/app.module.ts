import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './roles/roles.model';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'EninDesk',
    models: [Role], 
    autoLoadModels: true,
    synchronize: true, 
  }),RolesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

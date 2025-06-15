import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProyectoModule } from './proyecto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'proyecto_db',
      entities: [Proyecto],
      synchronize: process.env.NODE_ENV !== 'production',
      autoLoadEntities: true,
    }),
    ProyectoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

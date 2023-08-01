import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
} from '@nestjs/typeorm';

export default class TypeOrmConfig {
  
  static getOrmConfig(configService: ConfigService) {
    console.log(`node :pppp ${process.env.NODE_ENV}`);
    return {
      type: 'mysql',
      host: configService.get('database.host'),
      port: configService.get('database.port'),
      user: configService.get('database.user'),
      password: configService.get('database.password'),
      database: configService.get('database.database'),
      autoLoadEntities: true,
      synchronize: true,
      migrationsRun: false,
      keepConnectionAlive:true,
      entities: [__dirname + '/../**/*.entity.js'],
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<any> => TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService],
};
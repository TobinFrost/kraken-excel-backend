import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KrakenModule } from './kraken/kraken.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    KrakenModule,
    MongooseModule.forRoot('mongodb://localhost:27017/kraken-database'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

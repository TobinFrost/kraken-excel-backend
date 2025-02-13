import { Module } from '@nestjs/common';
import { KrakenController } from './controller/kraken.controller';
import { Database } from './database/database';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './model/product.schema';
import { ProductService } from './service/product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [KrakenController],
  providers: [Database, ProductService],
})
export class KrakenModule {}

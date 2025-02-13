import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { Express } from 'express';
import { ProductService } from '../service/product.service';

@Controller('kraken')
export class KrakenController {
  constructor(private readonly productService: ProductService) {}
  @Post('/')
  @UseInterceptors(FileInterceptor('file'))
  async get(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return { message: 'Aucun fichier fourni' };
    }

    /*  const p: Product = await this.productService.create({
      name: 'test',
      updated_at: new Date(),
      prices: [1, 2],
      rate: 2,
      category: 'product',
    }); */

    //console.log('product : ', p);

    return { message: 'Fichier Excel analysé avec succès' };
  }
}

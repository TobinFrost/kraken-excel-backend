import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { ProductDto } from '../model/product.dto';

@Controller('kraken')
export class KrakenController {
  constructor(private readonly productService: ProductService) {}

  @Post('/')
  async getProducts(@Body() data: ProductDto[]) {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const product = data[i];
        await this.productService.create(product);
      }
      return { message: 'Products inserted successfully' };
    }
  }
}

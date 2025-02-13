import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../model/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private productModel: Model<ProductDocument>,
  ) {}
  async create(createProductDto: any): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }
}

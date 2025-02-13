import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  updated_at: string;

  @Prop({ required: true })
  prices: number[];

  @Prop({ required: true })
  rate: number;

  @Prop({ required: true })
  category: 'product' | 'equipment';
}

export const ProductSchema = SchemaFactory.createForClass(Product);

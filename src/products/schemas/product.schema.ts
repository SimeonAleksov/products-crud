import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ versionKey: false })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  available: boolean;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  dateCreated: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

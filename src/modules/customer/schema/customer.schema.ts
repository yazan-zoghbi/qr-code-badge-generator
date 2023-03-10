import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { QrBadge } from 'src/modules/qr/schemas/qr.schema';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {

  @Prop({ unique: true })
  username: string;

  @Prop({ unique: true, lowercase: true })
  email: string;

  @Prop()
  password: string;

  @Prop({
    type: [{ type: [{type: mongoose.Schema.Types.ObjectId, ref: 'QrCode' }]}],
  })
  qr_code_id?: QrBadge[];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

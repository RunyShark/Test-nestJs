import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserEntiti extends Document {
  @Prop()
  email: string;

  @Prop()
  lastName: string;

  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(UserEntiti);

import { prop, getModelForClass } from '@typegoose/typegoose';

export class URL{

    @prop()
    public hash?: string

    @prop()
    public originURL?: string

    @prop()
    public shortURL?: string

}

export const URLModel = getModelForClass(URL);
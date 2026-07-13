import type { Object } from '../java/lang/Object.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
export class BuiltInConverters$ToStringConverter extends Object implements Converter<Object, string> {
    constructor()
    convert(arg0: Object): string;
}
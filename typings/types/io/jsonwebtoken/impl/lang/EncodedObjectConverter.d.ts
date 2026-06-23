import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class EncodedObjectConverter<T extends unknown> extends Object implements Converter<T, Object> {
    constructor(arg0: Class<T>, arg1: Converter<T, CharSequence>)
    // private converter: Converter<T, CharSequence>;
    // private type: Class<T>;
    applyFrom(arg0: Object): T;
    applyTo(arg0: T): Object;
}
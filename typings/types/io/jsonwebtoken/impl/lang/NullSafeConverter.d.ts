import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NullSafeConverter<A extends unknown, B extends unknown> extends Object implements Converter<A, B> {
    constructor(arg0: Converter<A, B>)
    // private converter: Converter<A, B>;
    applyFrom(arg0: B): A;
    applyTo(arg0: A): B;
}
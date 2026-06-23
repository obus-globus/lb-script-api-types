import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CompoundConverter<A extends unknown, B extends unknown, C extends unknown> extends Object implements Converter<A, C> {
    constructor(arg0: Converter<A, B>, arg1: Converter<B, C>)
    // private first: Converter<A, B>;
    // private second: Converter<B, C>;
    applyFrom(arg0: C): A;
    applyTo(arg0: A): C;
}
import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Converter$ConverterComposition<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Converter<A, C> implements Serializable {
    static from(paramforwardFunction: (param0: Object | null) => Object | null, parambackwardFunction: (param0: Object | null) => Object | null): Converter<Object, Object>;
    static identity(): Converter<Object, Object>;
    constructor(first: Converter<A, B>, second: Converter<B, C>)
    // private first: Converter<A, B>;
    // private second: Converter<B, C>;
    correctedDoBackward(c: C): A;
    correctedDoForward(a: A): C;
    doBackward(c: C): A;
    doForward(a: A): C;
    equals(object: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
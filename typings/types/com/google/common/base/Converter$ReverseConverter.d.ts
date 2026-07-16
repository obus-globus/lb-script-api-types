import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Converter$ReverseConverter<A extends unknown, B extends unknown> extends Converter<B, A> implements Serializable {
    static from<A extends unknown, B extends unknown>(paramforwardFunction: (param0: Object) => B, parambackwardFunction: (param0: Object) => A): Converter<A, B>;
    static identity<T extends unknown>(): Converter<T, T>;
    constructor(original: Converter<A, B>)
    // private original: Converter<A, B>;
    correctedDoBackward(a: A): B;
    correctedDoForward(b: B): A;
    doBackward(a: A): B;
    doForward(b: B): A;
    equals(object: Object | null): boolean;
    hashCode(): number;
    reverse(): Converter<A, B>;
    toString(): string;
}
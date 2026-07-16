import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Converter$FunctionBasedConverter<A extends unknown, B extends unknown> extends Converter<A, B> implements Serializable {
    static from<A extends unknown, B extends unknown>(paramforwardFunction: (param0: Object) => B, parambackwardFunction: (param0: Object) => A): Converter<A, B>;
    static identity<T extends unknown>(): Converter<T, T>;
    constructor(arg0: (param0: Object) => Object, arg1: (param0: Object) => Object, arg2: Iterator<B>)
    // private backwardFunction: (param0: B) => A;
    // private forwardFunction: (param0: A) => B;
    doBackward(b: B): A;
    doForward(a: A): B;
    equals(object: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
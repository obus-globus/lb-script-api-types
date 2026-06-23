import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Converter$FunctionBasedConverter<A extends unknown, B extends unknown> extends Converter<A, B> implements Serializable {
    static from(paramforwardFunction: (param0: Object) => boolean, parambackwardFunction: (param0: Object) => boolean): Converter<Object, Object>;
    static identity(): Converter<Object, Object>;
    private constructor(forwardFunction: (param0: Object) => boolean, backwardFunction: (param0: Object) => boolean)
    // private backwardFunction: (param0: Object) => boolean;
    // private forwardFunction: (param0: Object) => boolean;
    doBackward(b: B): A;
    doForward(a: A): B;
    equals(object: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
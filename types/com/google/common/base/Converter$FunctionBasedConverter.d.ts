import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Converter$FunctionBasedConverter<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Converter<A, B> implements Serializable {
    static from(paramforwardFunction: (param0: Object | null) => Object | null, parambackwardFunction: (param0: Object | null) => Object | null): Converter<Object, Object>;
    static identity(): Converter<Object, Object>;
    private constructor(forwardFunction: (param0: A) => B, backwardFunction: (param0: B) => A)
    // private backwardFunction: (param0: B) => A;
    // private forwardFunction: (param0: A) => B;
    doBackward(b: B): A;
    doForward(a: A): B;
    equals(object: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
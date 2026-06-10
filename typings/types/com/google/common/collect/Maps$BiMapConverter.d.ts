import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Maps$BiMapConverter<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Converter<A, B> implements Serializable {
    static from(paramforwardFunction: (param0: Object) => boolean, parambackwardFunction: (param0: Object) => boolean): Converter<Object, Object>;
    static identity(): Converter<Object, Object>;
    constructor(bimap: Map<A, B>)
    // private bimap: Map<A, B>;
    doBackward(b: B): A;
    doForward(a: A): B;
    equals(object: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
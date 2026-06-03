import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Function as Function_2 } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Converter<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Object implements Function<A, B> {
    static from(paramforwardFunction: (param0: Object | null) => Object | null, parambackwardFunction: (param0: Object | null) => Object | null): Converter<Object, Object>;
    static identity(): Converter<Object, Object>;
    constructor()
    constructor(handleNullAutomatically: boolean)
    // private handleNullAutomatically: boolean;
    // private reverse: Converter<B, A>;
    andThen(secondConverter: Converter<B, C>): Converter<A, C>;
    andThen(arg0: (param0: B) => V): (param0: A) => V;
    apply(a: A): B;
    convert(a: A): B;
    convertAll(fromIterable: A[]): B[];
    correctedDoBackward(b: B): A;
    correctedDoForward(a: A): B;
    doAndThen(secondConverter: Converter<B, C>): Converter<A, C>;
    doBackward(b: B): A;
    doForward(a: A): B;
    equals(object: Object | null): boolean;
    reverse(): Converter<B, A>;
    // private unsafeDoBackward(b: B): A;
    // private unsafeDoForward(a: A): B;
}
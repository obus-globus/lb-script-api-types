import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Converter$IdentityConverter<T extends Object | number | string | boolean> extends Converter<T, T> implements Serializable {
    static from(paramforwardFunction: (param0: Object | null) => Object | null, parambackwardFunction: (param0: Object | null) => Object | null): Converter<Object, Object>;
    static identity(): Converter<Object, Object>;
    private constructor()
    doAndThen(otherConverter: Converter<T, S>): Converter<T, S>;
    doBackward(t: T): T;
    doForward(t: T): T;
    // private readResolve(): Object;
    reverse(): Converter$IdentityConverter<T>;
    toString(): string;
}
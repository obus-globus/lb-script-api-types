import type { FromNativeContext } from '../../../com/sun/jna/FromNativeContext.d.ts'
import type { NativeMapped } from '../../../com/sun/jna/NativeMapped.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export abstract class IntegerType extends Number implements NativeMapped {
    static compare<T extends IntegerType>(paramarg0: T, paramarg1: T): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: boolean)
    // private number: Number;
    // private size: number;
    // private unsigned: boolean;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    fromNative(arg0: Object, arg1: FromNativeContext): Object;
    hashCode(): number;
    nativeType(): Class<Object>;
    setValue(arg0: number): void;
    toDouble(): number;
    toFloat(): number;
    toInt(): number;
    toLong(): number;
    toNative(): Object;
    toString(): string;
}
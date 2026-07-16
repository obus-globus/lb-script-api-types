import type { FromNativeContext } from '../../../../../com/sun/jna/FromNativeContext.d.ts'
import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class X11$XID extends NativeLong {
    static None: X11$XID;
    static SIZE: number;
    static compare<T extends IntegerType>(paramarg0: T, paramarg1: T): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
    fromNative(arg0: Object, arg1: FromNativeContext): Object;
    isNone(arg0: Object): boolean;
    toString(): string;
}
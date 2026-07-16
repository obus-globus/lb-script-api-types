import type { FromNativeContext } from '../../../../../com/sun/jna/FromNativeContext.d.ts'
import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { X11$XID } from '../../../../../com/sun/jna/platform/unix/X11$XID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class X11$Atom extends X11$XID {
    static None: X11$Atom;
    static SIZE: number;
    static compare(paramarg0: IntegerType | null, paramarg1: IntegerType | null): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
    fromNative(arg0: Object, arg1: FromNativeContext): Object;
}
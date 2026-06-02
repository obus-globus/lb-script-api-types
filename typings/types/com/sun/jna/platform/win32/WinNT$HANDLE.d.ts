import type { FromNativeContext } from '../../../../../com/sun/jna/FromNativeContext.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { PointerType } from '../../../../../com/sun/jna/PointerType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinNT$HANDLE extends PointerType {
    constructor()
    constructor(arg0: Pointer)
    // private immutable: boolean;
    fromNative(arg0: Object, arg1: FromNativeContext): Object;
    setPointer(arg0: Pointer): void;
    toString(): string;
}
import type { FromNativeContext } from '../../../../../com/sun/jna/FromNativeContext.d.ts'
import type { NativeMapped } from '../../../../../com/sun/jna/NativeMapped.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinCrypt$CertStoreProviderName extends Object implements NativeMapped {
    constructor()
    private constructor(arg0: Pointer)
    constructor(arg0: number)
    constructor(arg0: string)
    // private pointer: Pointer;
    fromNative(arg0: Object, arg1: FromNativeContext): Object;
    nativeType(): Class<Object>;
    toNative(): Object;
}
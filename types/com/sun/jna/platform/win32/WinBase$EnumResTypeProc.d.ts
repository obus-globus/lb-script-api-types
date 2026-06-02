import type { Callback } from '../../../../../com/sun/jna/Callback.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { WinDef$HMODULE } from '../../../../../com/sun/jna/platform/win32/WinDef$HMODULE.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WinBase$EnumResTypeProc extends Callback, Object{
    invoke(arg0: WinDef$HMODULE, arg1: Pointer, arg2: Pointer): boolean;
}
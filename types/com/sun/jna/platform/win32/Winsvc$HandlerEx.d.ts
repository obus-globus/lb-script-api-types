import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Winsvc$HandlerEx extends StdCallLibrary$StdCallCallback, Object{
    callback(arg0: number, arg1: number, arg2: Pointer, arg3: Pointer): number;
}
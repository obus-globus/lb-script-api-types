import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DispatchVTable$ReleaseCallback extends StdCallLibrary$StdCallCallback, Object{
    invoke(arg0: Pointer): number;
}
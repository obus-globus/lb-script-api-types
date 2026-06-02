import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WinRas$RasDialFunc2 extends StdCallLibrary$StdCallCallback, Object{
    dialNotification(arg0: number, arg1: number, arg2: WinNT$HANDLE, arg3: number, arg4: number, arg5: number, arg6: number): number;
}
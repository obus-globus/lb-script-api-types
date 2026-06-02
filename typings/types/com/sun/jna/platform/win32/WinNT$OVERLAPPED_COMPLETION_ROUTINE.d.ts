import type { WinBase$OVERLAPPED } from '../../../../../com/sun/jna/platform/win32/WinBase$OVERLAPPED.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WinNT$OVERLAPPED_COMPLETION_ROUTINE extends StdCallLibrary$StdCallCallback, Object{
    callback(arg0: number, arg1: number, arg2: WinBase$OVERLAPPED): void;
}
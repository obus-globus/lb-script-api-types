import type { StdCallLibrary$StdCallCallback } from '../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Winsvc$Handler extends StdCallLibrary$StdCallCallback, Object{
    callback(arg0: number): void;
}
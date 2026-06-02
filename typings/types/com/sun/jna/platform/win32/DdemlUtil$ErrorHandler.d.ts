import type { Ddeml$HCONV } from '../../../../../com/sun/jna/platform/win32/Ddeml$HCONV.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DdemlUtil$ErrorHandler extends Object{
    onError(arg0: number, arg1: Ddeml$HCONV, arg2: number): void;
}
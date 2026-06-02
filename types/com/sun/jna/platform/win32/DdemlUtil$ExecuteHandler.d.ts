import type { Ddeml$HCONV } from '../../../../../com/sun/jna/platform/win32/Ddeml$HCONV.d.ts'
import type { Ddeml$HDDEDATA } from '../../../../../com/sun/jna/platform/win32/Ddeml$HDDEDATA.d.ts'
import type { Ddeml$HSZ } from '../../../../../com/sun/jna/platform/win32/Ddeml$HSZ.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DdemlUtil$ExecuteHandler extends Object{
    onExecute(arg0: number, arg1: Ddeml$HCONV, arg2: Ddeml$HSZ, arg3: Ddeml$HDDEDATA): number;
}
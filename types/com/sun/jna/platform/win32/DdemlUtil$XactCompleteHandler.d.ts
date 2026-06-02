import type { BaseTSD$ULONG_PTR } from '../../../../../com/sun/jna/platform/win32/BaseTSD$ULONG_PTR.d.ts'
import type { Ddeml$HCONV } from '../../../../../com/sun/jna/platform/win32/Ddeml$HCONV.d.ts'
import type { Ddeml$HDDEDATA } from '../../../../../com/sun/jna/platform/win32/Ddeml$HDDEDATA.d.ts'
import type { Ddeml$HSZ } from '../../../../../com/sun/jna/platform/win32/Ddeml$HSZ.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DdemlUtil$XactCompleteHandler extends Object{
    onXactComplete(arg0: number, arg1: number, arg2: Ddeml$HCONV, arg3: Ddeml$HSZ, arg4: Ddeml$HSZ, arg5: Ddeml$HDDEDATA, arg6: BaseTSD$ULONG_PTR, arg7: BaseTSD$ULONG_PTR): void;
}
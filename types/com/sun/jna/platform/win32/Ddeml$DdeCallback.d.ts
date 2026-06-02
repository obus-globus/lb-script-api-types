import type { BaseTSD$ULONG_PTR } from '../../../../../com/sun/jna/platform/win32/BaseTSD$ULONG_PTR.d.ts'
import type { Ddeml$HCONV } from '../../../../../com/sun/jna/platform/win32/Ddeml$HCONV.d.ts'
import type { Ddeml$HDDEDATA } from '../../../../../com/sun/jna/platform/win32/Ddeml$HDDEDATA.d.ts'
import type { Ddeml$HSZ } from '../../../../../com/sun/jna/platform/win32/Ddeml$HSZ.d.ts'
import type { WinDef$PVOID } from '../../../../../com/sun/jna/platform/win32/WinDef$PVOID.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Ddeml$DdeCallback extends StdCallLibrary$StdCallCallback, Object{
    ddeCallback(arg0: number, arg1: number, arg2: Ddeml$HCONV, arg3: Ddeml$HSZ, arg4: Ddeml$HSZ, arg5: Ddeml$HDDEDATA, arg6: BaseTSD$ULONG_PTR, arg7: BaseTSD$ULONG_PTR): WinDef$PVOID;
}
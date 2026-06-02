import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { BaseTSD$DWORD_PTR } from '../../../../../com/sun/jna/platform/win32/BaseTSD$DWORD_PTR.d.ts'
import type { Ddeml$CONVINFO } from '../../../../../com/sun/jna/platform/win32/Ddeml$CONVINFO.d.ts'
import type { Ddeml$HCONV } from '../../../../../com/sun/jna/platform/win32/Ddeml$HCONV.d.ts'
import type { Ddeml$HDDEDATA } from '../../../../../com/sun/jna/platform/win32/Ddeml$HDDEDATA.d.ts'
import type { Ddeml$HSZ } from '../../../../../com/sun/jna/platform/win32/Ddeml$HSZ.d.ts'
import type { DdemlUtil$IDdeClient } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$IDdeClient.d.ts'
import type { DdemlUtil$IDdeConnection } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$IDdeConnection.d.ts'
import type { WinDef$DWORDByReference } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORDByReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DdemlUtil$DdeConnection extends Object implements DdemlUtil$IDdeConnection {
    constructor(arg0: DdemlUtil$IDdeClient, arg1: Ddeml$HCONV)
    // private client: DdemlUtil$IDdeClient;
    readonly conv: Ddeml$HCONV;
    abandonTransaction(arg0: number): void;
    abandonTransactions(): void;
    advstart(arg0: Ddeml$HSZ, arg1: number, arg2: number, arg3: WinDef$DWORDByReference, arg4: BaseTSD$DWORD_PTR): void;
    advstart(arg0: string, arg1: number, arg2: number, arg3: WinDef$DWORDByReference, arg4: BaseTSD$DWORD_PTR): void;
    advstop(arg0: Ddeml$HSZ, arg1: number, arg2: number, arg3: WinDef$DWORDByReference, arg4: BaseTSD$DWORD_PTR): void;
    advstop(arg0: string, arg1: number, arg2: number, arg3: WinDef$DWORDByReference, arg4: BaseTSD$DWORD_PTR): void;
    clientTransaction(arg0: Pointer, arg1: number, arg2: Ddeml$HSZ, arg3: number, arg4: number, arg5: number, arg6: WinDef$DWORDByReference, arg7: BaseTSD$DWORD_PTR): Ddeml$HDDEDATA;
    clientTransaction(arg0: Pointer, arg1: number, arg2: string, arg3: number, arg4: number, arg5: number, arg6: WinDef$DWORDByReference, arg7: BaseTSD$DWORD_PTR): Ddeml$HDDEDATA;
    close(): void;
    enableCallback(arg0: number): boolean;
    execute(arg0: string, arg1: number, arg2: WinDef$DWORDByReference, arg3: BaseTSD$DWORD_PTR): void;
    getConv(): Ddeml$HCONV;
    impersonateClient(): void;
    poke(arg0: Pointer, arg1: number, arg2: Ddeml$HSZ, arg3: number, arg4: number, arg5: WinDef$DWORDByReference, arg6: BaseTSD$DWORD_PTR): void;
    poke(arg0: Pointer, arg1: number, arg2: string, arg3: number, arg4: number, arg5: WinDef$DWORDByReference, arg6: BaseTSD$DWORD_PTR): void;
    queryConvInfo(arg0: number): Ddeml$CONVINFO;
    reconnect(): void;
    request(arg0: Ddeml$HSZ, arg1: number, arg2: number, arg3: WinDef$DWORDByReference, arg4: BaseTSD$DWORD_PTR): Ddeml$HDDEDATA;
    request(arg0: string, arg1: number, arg2: number, arg3: WinDef$DWORDByReference, arg4: BaseTSD$DWORD_PTR): Ddeml$HDDEDATA;
    setUserHandle(arg0: number, arg1: BaseTSD$DWORD_PTR): void;
}
import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { IConnectionPoint } from '../../../../../../com/sun/jna/platform/win32/COM/IConnectionPoint.d.ts'
import type { IUnknownCallback } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknownCallback.d.ts'
import type { Unknown } from '../../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { WinDef$DWORD } from '../../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$DWORDByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$DWORDByReference.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
export class ConnectionPoint extends Unknown implements IConnectionPoint {
    static IID_IConnectionPoint: Guid$IID;
    static IID_IUNKNOWN: Guid$IID;
    constructor(arg0: Pointer)
    Advise(arg0: IUnknownCallback, arg1: WinDef$DWORDByReference): WinNT$HRESULT;
    EnumConnections(): void;
    GetConnectionInterface(arg0: Guid$IID): WinNT$HRESULT;
    GetConnectionPointContainer(): void;
    Unadvise(arg0: WinDef$DWORD): WinNT$HRESULT;
}
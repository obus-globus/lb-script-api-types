import type { IUnknown } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknown.d.ts'
import type { IUnknownCallback } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknownCallback.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { WinDef$DWORD } from '../../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$DWORDByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$DWORDByReference.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IConnectionPoint extends IUnknown, Object{
    AddRef(): number;
    Advise(arg0: IUnknownCallback, arg1: WinDef$DWORDByReference): WinNT$HRESULT;
    GetConnectionInterface(arg0: Guid$IID): WinNT$HRESULT;
    QueryInterface(arg0: Guid$REFIID, arg1: PointerByReference): WinNT$HRESULT;
    Release(): number;
    Unadvise(arg0: WinDef$DWORD): WinNT$HRESULT;
}
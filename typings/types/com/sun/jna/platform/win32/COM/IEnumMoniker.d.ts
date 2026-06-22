import type { IUnknown } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknown.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { WinDef$ULONG } from '../../../../../../com/sun/jna/platform/win32/WinDef$ULONG.d.ts'
import type { WinDef$ULONGByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$ULONGByReference.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IEnumMoniker extends IUnknown, Object{
    AddRef(): number;
    Clone(arg0: PointerByReference): WinNT$HRESULT;
    Next(arg0: WinDef$ULONG, arg1: PointerByReference, arg2: WinDef$ULONGByReference): WinNT$HRESULT;
    QueryInterface(arg0: Guid$REFIID, arg1: PointerByReference): WinNT$HRESULT;
    Release(): number;
    Reset(): WinNT$HRESULT;
    Skip(arg0: WinDef$ULONG): WinNT$HRESULT;
}
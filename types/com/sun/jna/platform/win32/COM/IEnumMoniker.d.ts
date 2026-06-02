import type { IUnknown } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknown.d.ts'
import type { WinDef$ULONG } from '../../../../../../com/sun/jna/platform/win32/WinDef$ULONG.d.ts'
import type { WinDef$ULONGByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$ULONGByReference.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IEnumMoniker extends IUnknown, Object{
    Clone(arg0: PointerByReference): WinNT$HRESULT;
    Next(arg0: WinDef$ULONG, arg1: PointerByReference, arg2: WinDef$ULONGByReference): WinNT$HRESULT;
    Reset(): WinNT$HRESULT;
    Skip(arg0: WinDef$ULONG): WinNT$HRESULT;
}
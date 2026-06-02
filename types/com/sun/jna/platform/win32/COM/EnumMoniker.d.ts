import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { IEnumMoniker } from '../../../../../../com/sun/jna/platform/win32/COM/IEnumMoniker.d.ts'
import type { Unknown } from '../../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { WinDef$ULONG } from '../../../../../../com/sun/jna/platform/win32/WinDef$ULONG.d.ts'
import type { WinDef$ULONGByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$ULONGByReference.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
export class EnumMoniker extends Unknown implements IEnumMoniker {
    static IID: Guid$IID;
    static IID_IUNKNOWN: Guid$IID;
    constructor(arg0: Pointer)
    Clone(arg0: PointerByReference): WinNT$HRESULT;
    Next(arg0: WinDef$ULONG, arg1: PointerByReference, arg2: WinDef$ULONGByReference): WinNT$HRESULT;
    Reset(): WinNT$HRESULT;
    Skip(arg0: WinDef$ULONG): WinNT$HRESULT;
}
import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { WString } from '../../../../../../com/sun/jna/WString.d.ts'
import type { Unknown } from '../../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { OaIdl$BINDPTR$ByReference } from '../../../../../../com/sun/jna/platform/win32/OaIdl$BINDPTR$ByReference.d.ts'
import type { OaIdl$DESCKIND$ByReference } from '../../../../../../com/sun/jna/platform/win32/OaIdl$DESCKIND$ByReference.d.ts'
import type { WinDef$ULONG } from '../../../../../../com/sun/jna/platform/win32/WinDef$ULONG.d.ts'
import type { WinDef$WORD } from '../../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
export class TypeComp extends Unknown {
    static IID_IUNKNOWN: Guid$IID;
    constructor()
    constructor(arg0: Pointer)
    Bind(arg0: WString, arg1: WinDef$ULONG, arg2: WinDef$WORD, arg3: PointerByReference, arg4: OaIdl$DESCKIND$ByReference, arg5: OaIdl$BINDPTR$ByReference): WinNT$HRESULT;
    BindType(arg0: WString, arg1: WinDef$ULONG, arg2: PointerByReference, arg3: PointerByReference): WinNT$HRESULT;
}
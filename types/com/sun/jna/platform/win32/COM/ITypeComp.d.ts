import type { WString } from '../../../../../../com/sun/jna/WString.d.ts'
import type { IUnknown } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknown.d.ts'
import type { OaIdl$BINDPTR$ByReference } from '../../../../../../com/sun/jna/platform/win32/OaIdl$BINDPTR$ByReference.d.ts'
import type { OaIdl$DESCKIND$ByReference } from '../../../../../../com/sun/jna/platform/win32/OaIdl$DESCKIND$ByReference.d.ts'
import type { WinDef$ULONG } from '../../../../../../com/sun/jna/platform/win32/WinDef$ULONG.d.ts'
import type { WinDef$WORD } from '../../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ITypeComp extends IUnknown, Object{
    Bind(arg0: WString, arg1: WinDef$ULONG, arg2: WinDef$WORD, arg3: PointerByReference, arg4: OaIdl$DESCKIND$ByReference, arg5: OaIdl$BINDPTR$ByReference): WinNT$HRESULT;
    BindType(arg0: WString, arg1: WinDef$ULONG, arg2: PointerByReference, arg3: PointerByReference): WinNT$HRESULT;
}
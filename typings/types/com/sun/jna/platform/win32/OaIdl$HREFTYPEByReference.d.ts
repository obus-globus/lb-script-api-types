import type { OaIdl$HREFTYPE } from '../../../../../com/sun/jna/platform/win32/OaIdl$HREFTYPE.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$DWORDByReference } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORDByReference.d.ts'
export class OaIdl$HREFTYPEByReference extends WinDef$DWORDByReference {
    constructor()
    constructor(arg0: WinDef$DWORD)
    getValue(): OaIdl$HREFTYPE;
    setValue(arg0: OaIdl$HREFTYPE): void;
    setValue(arg0: WinDef$DWORD): void;
}
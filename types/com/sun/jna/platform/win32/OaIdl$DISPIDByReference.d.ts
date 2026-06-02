import type { OaIdl$DISPID } from '../../../../../com/sun/jna/platform/win32/OaIdl$DISPID.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class OaIdl$DISPIDByReference extends ByReference {
    constructor()
    constructor(arg0: OaIdl$DISPID)
    getValue(): OaIdl$DISPID;
    setValue(arg0: OaIdl$DISPID): void;
}
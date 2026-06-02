import type { OaIdl$MEMBERID } from '../../../../../com/sun/jna/platform/win32/OaIdl$MEMBERID.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class OaIdl$MEMBERIDByReference extends ByReference {
    constructor()
    constructor(arg0: OaIdl$MEMBERID)
    getValue(): OaIdl$MEMBERID;
    setValue(arg0: OaIdl$MEMBERID): void;
}
import type { OaIdl$VARIANT_BOOL } from '../../../../../com/sun/jna/platform/win32/OaIdl$VARIANT_BOOL.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class OaIdl$VARIANT_BOOLByReference extends ByReference {
    constructor()
    constructor(arg0: OaIdl$VARIANT_BOOL)
    getValue(): OaIdl$VARIANT_BOOL;
    setValue(arg0: OaIdl$VARIANT_BOOL): void;
}
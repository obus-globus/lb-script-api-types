import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { DescriptorKindFilter$Companion$MaskToName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter$Companion$MaskToName.d.ts'
export class DescriptorKindFilter$Companion extends Object {
    constructor(arg0: DefaultConstructorMarker)
    getALL_KINDS_MASK(): number;
    getCLASSIFIERS_MASK(): number;
    // private getDEBUG_MASK_BIT_NAMES(): DescriptorKindFilter$Companion$MaskToName[];
    // private getDEBUG_PREDEFINED_FILTERS_MASK_NAMES(): DescriptorKindFilter$Companion$MaskToName[];
    getFUNCTIONS_MASK(): number;
    getNON_SINGLETON_CLASSIFIERS_MASK(): number;
    getPACKAGES_MASK(): number;
    getSINGLETON_CLASSIFIERS_MASK(): number;
    getTYPE_ALIASES_MASK(): number;
    getVARIABLES_MASK(): number;
    // private nextMask(): number;
}
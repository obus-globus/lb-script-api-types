import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class BuiltinSpecialProperties extends Object {
    static INSTANCE: BuiltinSpecialProperties;
    private constructor()
    getPROPERTY_FQ_NAME_TO_JVM_GETTER_NAME_MAP(): Map<FqName, Name>;
    getPropertyNameCandidatesBySpecialGetterName(arg0: Name): Name[];
    getSPECIAL_FQ_NAMES(): FqName[];
    getSPECIAL_SHORT_NAMES(): Name[];
}
import type { Identifier } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { TextVerifier } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/verify/TextVerifier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface TextVerifier_v1_20_3 extends TextVerifier, Object{
    verifyRegistryEntity(arg0: Identifier): boolean;
    verifyRegistryItem(arg0: Identifier): boolean;
}
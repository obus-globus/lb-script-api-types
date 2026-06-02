import type { Tag } from '../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Identifier } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { TextVerifier } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/verify/TextVerifier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../../java/util/Map$Entry.d.ts'
export interface TextVerifier_v1_21_4 extends TextVerifier, Object{
    verifyDataComponents(arg0: Map$Entry<string, Tag>[]): boolean;
    verifyRegistryEntity(arg0: Identifier): boolean;
    verifyRegistryItem(arg0: Identifier): boolean;
    verifySelector(arg0: string): boolean;
}
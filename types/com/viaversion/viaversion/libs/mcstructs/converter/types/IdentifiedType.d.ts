import type { Identifier } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface IdentifiedType extends Object{
    getIdentifier(): Identifier;
}
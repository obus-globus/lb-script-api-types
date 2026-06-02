import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RegistryAccess } from '../../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
export class TagUtil extends Object {
    static C_TAG_NAMESPACE: string;
    static FABRIC_TAG_NAMESPACE: string;
    static isIn(paramarg0: RegistryAccess, paramarg1: TagKey<Object>, paramarg2: Object | null): boolean;
    static isIn(paramarg0: TagKey<Object>, paramarg1: Object | null): boolean;
    private constructor()
}
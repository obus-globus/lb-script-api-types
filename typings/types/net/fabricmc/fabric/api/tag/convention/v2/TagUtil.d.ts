import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RegistryAccess } from '../../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
export class TagUtil extends Object {
    static C_TAG_NAMESPACE: string;
    static FABRIC_TAG_NAMESPACE: string;
    static isIn<T extends unknown>(paramarg0: RegistryAccess, paramarg1: TagKey<T>, paramarg2: T): boolean;
    static isIn<T extends unknown>(paramarg0: TagKey<T>, paramarg1: T): boolean;
    private constructor()
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class RegistryMapSerializer extends Object {
    static VERSION: number;
    static fromNbt(paramarg0: CompoundTag): Map<Identifier, { [key: string]: any }>;
    static toNbt(paramarg0: Map<Identifier, { [key: string]: any }>): CompoundTag;
    constructor()
}
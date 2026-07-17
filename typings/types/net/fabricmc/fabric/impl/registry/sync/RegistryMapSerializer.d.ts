import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class RegistryMapSerializer extends Object {
    static VERSION: number;
    static fromNbt(paramarg0: CompoundTag): JavaMap<Identifier, JavaMap<any, any>>;
    static toNbt(paramarg0: JavaMap<Identifier, JavaMap<any, any>>): CompoundTag;
    constructor()
}
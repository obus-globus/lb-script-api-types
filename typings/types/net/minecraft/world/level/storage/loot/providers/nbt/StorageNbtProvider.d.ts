import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../../../../net/minecraft/nbt/Tag.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { NbtProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/nbt/NbtProvider.d.ts'
export class StorageNbtProvider extends Record implements NbtProvider {
    static MAP_CODEC: MapCodec<StorageNbtProvider>;
    constructor(id: Identifier)
    // private id: Identifier;
    codec(): MapCodec<StorageNbtProvider>;
    equals(o: Object | null): boolean;
    get(context: LootContext): Tag;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
}
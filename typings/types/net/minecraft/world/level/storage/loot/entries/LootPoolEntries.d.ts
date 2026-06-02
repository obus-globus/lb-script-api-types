import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
export class LootPoolEntries extends Object {
    static CODEC: Codec<LootPoolEntryContainer>;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    constructor()
}
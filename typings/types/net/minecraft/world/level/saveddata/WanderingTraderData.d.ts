import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { SavedData } from '../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
export class WanderingTraderData extends SavedData {
    static CODEC: Codec<WanderingTraderData>;
    static TYPE: SavedDataType<WanderingTraderData>;
    constructor()
    constructor(spawnDelay: number, spawnChance: number)
    setSpawnChance(spawnChance: number): void;
    setSpawnDelay(spawnDelay: number): void;
    spawnChance(): number;
    spawnDelay(): number;
}
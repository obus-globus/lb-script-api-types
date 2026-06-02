import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { InclusiveRange } from '../../../../net/minecraft/util/InclusiveRange.d.ts'
export class SpawnData$CustomSpawnRules extends Record {
    static CODEC: Codec<SpawnData$CustomSpawnRules>;
    constructor(blockLightLimit: InclusiveRange<number>, skyLightLimit: InclusiveRange<number>)
    // private blockLightLimit: InclusiveRange<number>;
    // private skyLightLimit: InclusiveRange<number>;
    blockLightLimit(): InclusiveRange<number>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isValidPosition(blockSpawnPos: BlockPos, level: ServerLevel): boolean;
    skyLightLimit(): InclusiveRange<number>;
    toString(): string;
}
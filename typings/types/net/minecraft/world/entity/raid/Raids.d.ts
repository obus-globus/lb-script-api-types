import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Raid } from '../../../../../net/minecraft/world/entity/raid/Raid.d.ts'
import type { Raider } from '../../../../../net/minecraft/world/entity/raid/Raider.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { SavedData } from '../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
export class Raids extends SavedData {
    static CODEC: Codec<Raids>;
    static TYPE: SavedDataType<Raids>;
    static canJoinRaid(paramraider: Raider): boolean;
    static load(paramtag: CompoundTag): Raids;
    constructor()
    // private nextId: number;
    // private raidMap: { [key: string]: any };
    // private tick: number;
    createOrExtendRaid(player: ServerPlayer, raidPosition: BlockPos): Raid;
    get(raidId: number): Raid;
    getId(raid: Raid): OptionalInt;
    getNearbyRaid(pos: BlockPos, maxDistSqr: number): Raid;
    // private getOrCreateRaid(level: ServerLevel, pos: BlockPos): Raid;
    getRaidCentersInChunk(chunkPos: ChunkPos): BlockPos[];
    // private getUniqueId(): number;
    tick(level: ServerLevel): void;
}
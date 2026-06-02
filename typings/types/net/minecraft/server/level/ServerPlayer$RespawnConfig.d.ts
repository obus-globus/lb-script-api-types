import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LevelData$RespawnData } from '../../../../net/minecraft/world/level/storage/LevelData$RespawnData.d.ts'
export class ServerPlayer$RespawnConfig extends Record {
    static CODEC: Codec<ServerPlayer$RespawnConfig>;
    // private forced: boolean;
    // private respawnData: LevelData$RespawnData;
    equals(o: Object | null): boolean;
    forced(): boolean;
    hashCode(): number;
    isSamePosition(other: ServerPlayer$RespawnConfig): boolean;
    respawnData(): LevelData$RespawnData;
    toString(): string;
}
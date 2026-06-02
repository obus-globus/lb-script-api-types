import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { OptionalInt } from '../../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class WardenSpawnTracker extends Object {
    static CODEC: Codec<WardenSpawnTracker>;
    static MAX_WARNING_LEVEL: number;
    static tryWarn(paramlevel: ServerLevel, parampos: BlockPos, paramtriggerPlayer: ServerPlayer): OptionalInt;
    constructor()
    constructor(ticksSinceLastWarning: number, warningLevel: number, cooldownTicks: number)
    // private cooldownTicks: number;
    // private ticksSinceLastWarning: number;
    readonly warningLevel: number;
    // private copyData(copyFrom: WardenSpawnTracker): void;
    // private decreaseWarningLevel(): void;
    getWarningLevel(): number;
    // private increaseWarningLevel(): void;
    // private onCooldown(): boolean;
    reset(): void;
    setWarningLevel(warningLevel: number): void;
    tick(): void;
}
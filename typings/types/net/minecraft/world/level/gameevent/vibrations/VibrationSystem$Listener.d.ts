import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GameEventListenerWithCallback } from '../../../../../../net/caffeinemc/mods/lithium/common/block/entity/sleeping_sculk/GameEventListenerWithCallback.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { GameEvent } from '../../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { GameEventListener } from '../../../../../../net/minecraft/world/level/gameevent/GameEventListener.d.ts'
import type { GameEventListener$DeliveryMode } from '../../../../../../net/minecraft/world/level/gameevent/GameEventListener$DeliveryMode.d.ts'
import type { PositionSource } from '../../../../../../net/minecraft/world/level/gameevent/PositionSource.d.ts'
import type { VibrationSystem } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSystem.d.ts'
import type { VibrationSystem$Data } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSystem$Data.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class VibrationSystem$Listener extends Object implements GameEventListenerWithCallback, GameEventListener {
    static distanceBetweenInBlocks(paramorigin: BlockPos, paramdest: BlockPos): number;
    constructor(system: VibrationSystem)
    // private listener: () => void;
    // private system: VibrationSystem;
    forceScheduleVibration(level: ServerLevel, event: Holder<GameEvent>, context: GameEvent$Context, origin: Vec3): void;
    getDeliveryMode(): GameEventListener$DeliveryMode;
    getListenerRadius(): number;
    getListenerSource(): PositionSource;
    handleGameEvent(level: ServerLevel, event: Holder<GameEvent>, context: GameEvent$Context, sourcePosition: Vec3): boolean;
    lithium$setGameEventCallback(arg0: () => void): void;
    // private scheduleVibration(level: ServerLevel, data: VibrationSystem$Data, event: Holder<GameEvent>, context: GameEvent$Context, origin: Vec3, dest: Vec3): void;
}
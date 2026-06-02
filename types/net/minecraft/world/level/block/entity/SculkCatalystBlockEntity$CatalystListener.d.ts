import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { SculkSpreader } from '../../../../../../net/minecraft/world/level/block/SculkSpreader.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { GameEvent } from '../../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { GameEventListener } from '../../../../../../net/minecraft/world/level/gameevent/GameEventListener.d.ts'
import type { GameEventListener$DeliveryMode } from '../../../../../../net/minecraft/world/level/gameevent/GameEventListener$DeliveryMode.d.ts'
import type { PositionSource } from '../../../../../../net/minecraft/world/level/gameevent/PositionSource.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SculkCatalystBlockEntity$CatalystListener extends Object implements GameEventListener {
    static PULSE_TICKS: number;
    constructor(blockState: BlockState, positionSource: PositionSource)
    // private blockState: BlockState;
    // private positionSource: PositionSource;
    readonly sculkSpreader: SculkSpreader;
    // private bloom(level: ServerLevel, pos: BlockPos, state: BlockState, random: RandomSource): void;
    getDeliveryMode(): GameEventListener$DeliveryMode;
    getDeliveryMode(): GameEventListener$DeliveryMode;
    getListenerRadius(): number;
    getListenerSource(): PositionSource;
    getSculkSpreader(): SculkSpreader;
    handleGameEvent(level: ServerLevel, event: Holder<GameEvent>, context: GameEvent$Context, sourcePosition: Vec3): boolean;
    // private tryAwardItSpreadsAdvancement(level: Level, mob: LivingEntity): void;
}
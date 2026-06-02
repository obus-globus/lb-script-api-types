import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { GameEvent } from '../../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { PositionSource } from '../../../../../../net/minecraft/world/level/gameevent/PositionSource.d.ts'
export interface VibrationSystem$User extends Object{
    calculateTravelTimeInTicks(distanceToDestination: number): number;
    canReceiveVibration(level: ServerLevel, pos: BlockPos, event: Holder<GameEvent>, context: GameEvent$Context): boolean;
    canTriggerAvoidVibration(): boolean;
    getListenableEvents(): TagKey<GameEvent>;
    getListenerRadius(): number;
    getPositionSource(): PositionSource;
    isValidVibration(event: Holder<GameEvent>, context: GameEvent$Context): boolean;
    onDataChanged(): void;
    onReceiveVibration(level: ServerLevel, pos: BlockPos, event: Holder<GameEvent>, sourceEntity: Entity, projectileOwner: Entity, receivingDistance: number): void;
    requiresAdjacentChunksToBeTicking(): boolean;
}
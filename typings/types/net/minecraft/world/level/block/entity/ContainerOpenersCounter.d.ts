import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ContainerUser } from '../../../../../../net/minecraft/world/entity/ContainerUser.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export abstract class ContainerOpenersCounter extends Object {
    constructor()
    // private maxInteractionRange: number;
    // private openCount: number;
    decrementOpeners(entity: LivingEntity, level: Level, pos: BlockPos, blockState: BlockState): void;
    getEntitiesWithContainerOpen(level: Level, pos: BlockPos): ContainerUser[];
    getOpenerCount(): number;
    // private hasContainerOpen(entity: Entity, blockPos: BlockPos): boolean;
    incrementOpeners(entity: LivingEntity, level: Level, pos: BlockPos, blockState: BlockState, maxInteractionRange: number): void;
    isOwnContainer(player: Player): boolean;
    onClose(level: Level, pos: BlockPos, blockState: BlockState): void;
    onOpen(level: Level, pos: BlockPos, blockState: BlockState): void;
    openerCountChanged(level: Level, pos: BlockPos, blockState: BlockState, previous: number, current: number): void;
    recheckOpeners(level: Level, pos: BlockPos, blockState: BlockState): void;
}
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { CollisionGetter } from '../../../../../net/minecraft/world/level/CollisionGetter.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { CollisionContext } from '../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class EntityCollisionContext extends Object implements CollisionContext {
    static empty(): CollisionContext;
    static emptyWithFluidCollisions(): CollisionContext;
    static of(paramentity: Entity): CollisionContext;
    static of(paramentity: Entity, paramalwaysCollideWithFluid: boolean): CollisionContext;
    static placementContext(paramplayer: Player): CollisionContext;
    static positionContext(paramy: number): CollisionContext;
    static withPosition(paramentity: Entity, paramposition: number): CollisionContext;
    constructor(descending: boolean, placement: boolean, entityBottom: number, heldItem: ItemStack, alwaysCollideWithFluid: boolean, entity: Entity)
    constructor(entity: Entity, alwaysCollideWithFluid: boolean, placement: boolean)
    // private alwaysCollideWithFluid: boolean;
    readonly descending: boolean;
    readonly entity: Entity;
    // private entityBottom: number;
    readonly heldItem: ItemStack;
    // private isDescendingNeedsInitialization: boolean;
    readonly placement: boolean;
    alwaysCollideWithFluid(): boolean;
    canStandOnFluid(fluidStateAbove: FluidState, fluid: FluidState): boolean;
    getCollisionShape(state: BlockState, collisionGetter: CollisionGetter, pos: BlockPos): VoxelShape;
    getEntity(): Entity;
    getHeldItem(): ItemStack;
    // private initHeldItem(): void;
    isAbove(shape: VoxelShape, pos: BlockPos, defaultValue: boolean): boolean;
    isDescending(): boolean;
    isHoldingItem(item: Item): boolean;
    isPlacement(): boolean;
}
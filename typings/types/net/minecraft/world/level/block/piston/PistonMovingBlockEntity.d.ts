import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class PistonMovingBlockEntity extends BlockEntity {
    static NBT_ATTACHMENT_KEY: string;
    static TICK_MOVEMENT: number;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<any>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static tick(paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramentity: PistonMovingBlockEntity): void;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    constructor(worldPosition: BlockPos, blockState: BlockState, movedState: BlockState, direction: Direction, extending: boolean, isSourcePiston: boolean)
    // private deathTicks: number;
    readonly direction: Direction;
    readonly extending: boolean;
    // private isSourcePiston: boolean;
    readonly lastTicked: number;
    readonly movedState: BlockState;
    // private progress: number;
    // private progressO: number;
    finalTick(): void;
    // private getCollisionRelatedBlockState(): BlockState;
    getCollisionShape(level: BlockGetter, pos: BlockPos): VoxelShape;
    getDirection(): Direction;
    // private getExtendedProgress(progress: number): number;
    getLastTicked(): number;
    getMovedState(): BlockState;
    getMovementDirection(): Direction;
    getProgress(a: number): number;
    getPushDirection(): Direction;
    getUpdateTag(registries: HolderLookup$Provider): CompoundTag;
    getXOff(a: number): number;
    getYOff(a: number): number;
    getZOff(a: number): number;
    isExtending(): boolean;
    isSourcePiston(): boolean;
    // private isStickyForEntities(): boolean;
    loadAdditional(input: ValueInput): void;
    preRemoveSideEffects(pos: BlockPos, state: BlockState): void;
    saveAdditional(output: ValueOutput): void;
    setLevel(level: Level): void;
}
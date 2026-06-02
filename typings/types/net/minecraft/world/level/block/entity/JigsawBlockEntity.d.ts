import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundBlockEntityDataPacket } from '../../../../../../net/minecraft/network/protocol/game/ClientboundBlockEntityDataPacket.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { JigsawBlockEntity$JointType } from '../../../../../../net/minecraft/world/level/block/entity/JigsawBlockEntity$JointType.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StructureTemplatePool } from '../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class JigsawBlockEntity extends BlockEntity {
    static DEFAULT_FINAL_STATE: string;
    static EMPTY_ID: Identifier;
    static FINAL_STATE: string;
    static JOINT: string;
    static NAME: string;
    static NBT_ATTACHMENT_KEY: string;
    static PLACEMENT_PRIORITY: string;
    static POOL: string;
    static POOL_CODEC: Codec<Object>;
    static SELECTION_PRIORITY: string;
    static TARGET: string;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    readonly finalState: string;
    readonly joint: JigsawBlockEntity$JointType;
    readonly name: Identifier;
    readonly placementPriority: number;
    readonly pool: ResourceKey<StructureTemplatePool>;
    readonly selectionPriority: number;
    readonly target: Identifier;
    generate(level: ServerLevel, levels: number, keepJigsaws: boolean): void;
    getFinalState(): string;
    getJoint(): JigsawBlockEntity$JointType;
    getName(): Identifier;
    getPlacementPriority(): number;
    getPool(): ResourceKey<StructureTemplatePool>;
    getSelectionPriority(): number;
    getTarget(): Identifier;
    getUpdatePacket(): ClientboundBlockEntityDataPacket;
    getUpdateTag(registries: HolderLookup$Provider): CompoundTag;
    loadAdditional(input: ValueInput): void;
    saveAdditional(output: ValueOutput): void;
    setFinalState(finalState: string): void;
    setJoint(joint: JigsawBlockEntity$JointType): void;
    setName(name: Identifier): void;
    setPlacementPriority(placementPriority: number): void;
    setPool(pool: ResourceKey<StructureTemplatePool>): void;
    setSelectionPriority(selectionPriority: number): void;
    setTarget(target: Identifier): void;
}
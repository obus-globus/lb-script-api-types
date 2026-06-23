import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentGetter } from '../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentMap$Builder } from '../../../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { BaseCommandBlock } from '../../../../../../net/minecraft/world/level/BaseCommandBlock.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { CommandBlockEntity$Mode } from '../../../../../../net/minecraft/world/level/block/entity/CommandBlockEntity$Mode.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class CommandBlockEntity extends BlockEntity {
    static NBT_ATTACHMENT_KEY: string;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<any>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    // private auto: boolean;
    readonly commandBlock: BaseCommandBlock;
    // private conditionMet: boolean;
    readonly powered: boolean;
    applyImplicitComponents(components: DataComponentGetter): void;
    collectImplicitComponents(components: DataComponentMap$Builder): void;
    getCommandBlock(): BaseCommandBlock;
    getMode(): CommandBlockEntity$Mode;
    isAutomatic(): boolean;
    isConditional(): boolean;
    isPowered(): boolean;
    loadAdditional(input: ValueInput): void;
    markConditionMet(): boolean;
    onModeSwitch(): void;
    removeComponentsFromTag(output: ValueOutput): void;
    saveAdditional(output: ValueOutput): void;
    // private scheduleTick(): void;
    setAutomatic(auto: boolean): void;
    setPowered(powered: boolean): void;
    wasConditionMet(): boolean;
}
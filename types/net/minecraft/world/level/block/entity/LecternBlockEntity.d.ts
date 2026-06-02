import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Clearable } from '../../../../../../net/minecraft/world/Clearable.d.ts'
import type { MenuProvider } from '../../../../../../net/minecraft/world/MenuProvider.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractContainerMenu } from '../../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { ContainerData } from '../../../../../../net/minecraft/world/inventory/ContainerData.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class LecternBlockEntity extends BlockEntity implements Clearable, MenuProvider {
    static DATA_PAGE: number;
    static NBT_ATTACHMENT_KEY: string;
    static NUM_DATA: number;
    static NUM_SLOTS: number;
    static SLOT_BOOK: number;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    readonly book: ItemStack;
    // private bookAccess: ItemStack[];
    // private dataAccess: ContainerData;
    readonly page: number;
    // private pageCount: number;
    clearContent(): void;
    // private createCommandSourceStack(player: Player, level: ServerLevel): CommandSourceStack;
    createMenu(containerId: number, inventory: (Object | null)[], player: Player): AbstractContainerMenu;
    getBook(): ItemStack;
    getDisplayName(): Component;
    getPage(): number;
    getRedstoneSignal(): number;
    hasBook(): boolean;
    loadAdditional(input: ValueInput): void;
    // private onBookItemRemove(): void;
    preRemoveSideEffects(pos: BlockPos, state: BlockState): void;
    // private resolveBook(book: ItemStack, player: Player): ItemStack;
    saveAdditional(output: ValueOutput): void;
    setBook(book: ItemStack): void;
    setBook(book: ItemStack, resolutionContext: Player): void;
    // private setPage(page: number): void;
}
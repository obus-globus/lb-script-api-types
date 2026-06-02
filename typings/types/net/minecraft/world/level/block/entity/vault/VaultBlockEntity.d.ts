import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientGamePacketListener } from '../../../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { VaultClientData } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultClientData.d.ts'
import type { VaultConfig } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultConfig.d.ts'
import type { VaultServerData } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultServerData.d.ts'
import type { VaultSharedData } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultSharedData.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class VaultBlockEntity extends BlockEntity {
    static NBT_ATTACHMENT_KEY: string;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    readonly clientData: VaultClientData;
    readonly config: VaultConfig;
    readonly serverData: VaultServerData;
    readonly sharedData: VaultSharedData;
    getClientData(): VaultClientData;
    getConfig(): VaultConfig;
    getServerData(): VaultServerData;
    getSharedData(): VaultSharedData;
    getUpdatePacket(): Packet<ClientGamePacketListener>;
    getUpdateTag(registries: HolderLookup$Provider): CompoundTag;
    loadAdditional(input: ValueInput): void;
    saveAdditional(output: ValueOutput): void;
    setConfig(config: VaultConfig): void;
}
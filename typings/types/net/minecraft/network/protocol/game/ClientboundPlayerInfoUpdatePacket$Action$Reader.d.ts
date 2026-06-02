import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { ClientboundPlayerInfoUpdatePacket$EntryBuilder } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerInfoUpdatePacket$EntryBuilder.d.ts'
export interface ClientboundPlayerInfoUpdatePacket$Action$Reader extends Object{
    read(entry: ClientboundPlayerInfoUpdatePacket$EntryBuilder, input: RegistryFriendlyByteBuf): void;
}
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { ClientboundPlayerInfoUpdatePacket$Entry } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerInfoUpdatePacket$Entry.d.ts'
export interface ClientboundPlayerInfoUpdatePacket$Action$Writer extends Object{
    write(output: RegistryFriendlyByteBuf, entry: ClientboundPlayerInfoUpdatePacket$Entry): void;
}
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ClientboundPlayerInfoUpdatePacket$Action$Reader } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerInfoUpdatePacket$Action$Reader.d.ts'
import type { ClientboundPlayerInfoUpdatePacket$Action$Writer } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerInfoUpdatePacket$Action$Writer.d.ts'
export class ClientboundPlayerInfoUpdatePacket$Action extends Enum<ClientboundPlayerInfoUpdatePacket$Action> {
    static ADD_PLAYER: ClientboundPlayerInfoUpdatePacket$Action;
    static INITIALIZE_CHAT: ClientboundPlayerInfoUpdatePacket$Action;
    static UPDATE_DISPLAY_NAME: ClientboundPlayerInfoUpdatePacket$Action;
    static UPDATE_GAME_MODE: ClientboundPlayerInfoUpdatePacket$Action;
    static UPDATE_HAT: ClientboundPlayerInfoUpdatePacket$Action;
    static UPDATE_LATENCY: ClientboundPlayerInfoUpdatePacket$Action;
    static UPDATE_LISTED: ClientboundPlayerInfoUpdatePacket$Action;
    static UPDATE_LIST_ORDER: ClientboundPlayerInfoUpdatePacket$Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ClientboundPlayerInfoUpdatePacket$Action;
    static values(): ClientboundPlayerInfoUpdatePacket$Action[];
    private constructor(reader: ClientboundPlayerInfoUpdatePacket$Action$Reader, writer: ClientboundPlayerInfoUpdatePacket$Action$Writer)
    // private reader: ClientboundPlayerInfoUpdatePacket$Action$Reader;
    // private writer: ClientboundPlayerInfoUpdatePacket$Action$Writer;
    name(): "ADD_PLAYER" | "INITIALIZE_CHAT" | "UPDATE_GAME_MODE" | "UPDATE_LISTED" | "UPDATE_LATENCY" | "UPDATE_DISPLAY_NAME" | "UPDATE_LIST_ORDER" | "UPDATE_HAT";
}
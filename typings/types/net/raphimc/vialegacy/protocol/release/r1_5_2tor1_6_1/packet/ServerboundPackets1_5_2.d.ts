import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Direction } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { PreNettyPacketType } from '../../../../../../../net/raphimc/vialegacy/api/splitter/PreNettyPacketType.d.ts'
export class ServerboundPackets1_5_2 extends Enum<ServerboundPackets1_5_2> implements ServerboundPacketType, PreNettyPacketType {
    static CHAT: ServerboundPackets1_5_2;
    static CLIENT_COMMAND: ServerboundPackets1_5_2;
    static CLIENT_INFORMATION: ServerboundPackets1_5_2;
    static CLIENT_PROTOCOL: ServerboundPackets1_5_2;
    static COMMAND_SUGGESTION: ServerboundPackets1_5_2;
    static CONTAINER_ACK: ServerboundPackets1_5_2;
    static CONTAINER_BUTTON_CLICK: ServerboundPackets1_5_2;
    static CONTAINER_CLICK: ServerboundPackets1_5_2;
    static CONTAINER_CLOSE: ServerboundPackets1_5_2;
    static CUSTOM_PAYLOAD: ServerboundPackets1_5_2;
    static DISCONNECT: ServerboundPackets1_5_2;
    static INTERACT: ServerboundPackets1_5_2;
    static KEEP_ALIVE: ServerboundPackets1_5_2;
    static LOGIN: ServerboundPackets1_5_2;
    static MOVE_PLAYER_POS: ServerboundPackets1_5_2;
    static MOVE_PLAYER_POS_ROT: ServerboundPackets1_5_2;
    static MOVE_PLAYER_ROT: ServerboundPackets1_5_2;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPackets1_5_2;
    static PLAYER_ABILITIES: ServerboundPackets1_5_2;
    static PLAYER_ACTION: ServerboundPackets1_5_2;
    static PLAYER_COMMAND: ServerboundPackets1_5_2;
    static RESPAWN: ServerboundPackets1_5_2;
    static SERVER_PING: ServerboundPackets1_5_2;
    static SET_CARRIED_ITEM: ServerboundPackets1_5_2;
    static SET_CREATIVE_MODE_SLOT: ServerboundPackets1_5_2;
    static SHARED_KEY: ServerboundPackets1_5_2;
    static SIGN_UPDATE: ServerboundPackets1_5_2;
    static SWING: ServerboundPackets1_5_2;
    static USE_ITEM_ON: ServerboundPackets1_5_2;
    static getPacket(paramarg0: number): ServerboundPackets1_5_2;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPackets1_5_2;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    state(): State;
    name(): "KEEP_ALIVE" | "LOGIN" | "CLIENT_PROTOCOL" | "CHAT" | "INTERACT" | "RESPAWN" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_ROT" | "MOVE_PLAYER_POS_ROT" | "PLAYER_ACTION" | "USE_ITEM_ON" | "SET_CARRIED_ITEM" | "SWING" | "PLAYER_COMMAND" | "CONTAINER_CLOSE" | "CONTAINER_CLICK" | "CONTAINER_ACK" | "SET_CREATIVE_MODE_SLOT" | "CONTAINER_BUTTON_CLICK" | "SIGN_UPDATE" | "PLAYER_ABILITIES" | "COMMAND_SUGGESTION" | "CLIENT_INFORMATION" | "CLIENT_COMMAND" | "CUSTOM_PAYLOAD" | "SHARED_KEY" | "SERVER_PING" | "DISCONNECT";
}
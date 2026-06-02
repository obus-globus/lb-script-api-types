import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Direction } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { PreNettyPacketType } from '../../../../../../../net/raphimc/vialegacy/api/splitter/PreNettyPacketType.d.ts'
export class ServerboundPackets1_0_0 extends Enum<ServerboundPackets1_0_0> implements ServerboundPacketType, PreNettyPacketType {
    static CHAT: ServerboundPackets1_0_0;
    static CONTAINER_ACK: ServerboundPackets1_0_0;
    static CONTAINER_BUTTON_CLICK: ServerboundPackets1_0_0;
    static CONTAINER_CLICK: ServerboundPackets1_0_0;
    static CONTAINER_CLOSE: ServerboundPackets1_0_0;
    static DISCONNECT: ServerboundPackets1_0_0;
    static HANDSHAKE: ServerboundPackets1_0_0;
    static INTERACT: ServerboundPackets1_0_0;
    static KEEP_ALIVE: ServerboundPackets1_0_0;
    static LOGIN: ServerboundPackets1_0_0;
    static MOVE_PLAYER_POS: ServerboundPackets1_0_0;
    static MOVE_PLAYER_POS_ROT: ServerboundPackets1_0_0;
    static MOVE_PLAYER_ROT: ServerboundPackets1_0_0;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPackets1_0_0;
    static PLAYER_ACTION: ServerboundPackets1_0_0;
    static PLAYER_COMMAND: ServerboundPackets1_0_0;
    static POSITION: ServerboundPackets1_0_0;
    static RESPAWN: ServerboundPackets1_0_0;
    static SERVER_PING: ServerboundPackets1_0_0;
    static SET_CARRIED_ITEM: ServerboundPackets1_0_0;
    static SET_CREATIVE_MODE_SLOT: ServerboundPackets1_0_0;
    static SIGN_UPDATE: ServerboundPackets1_0_0;
    static SWING: ServerboundPackets1_0_0;
    static USE_ITEM_ON: ServerboundPackets1_0_0;
    static getPacket(paramarg0: number): ServerboundPackets1_0_0;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPackets1_0_0;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    name(): "KEEP_ALIVE" | "LOGIN" | "HANDSHAKE" | "CHAT" | "INTERACT" | "RESPAWN" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_ROT" | "MOVE_PLAYER_POS_ROT" | "PLAYER_ACTION" | "USE_ITEM_ON" | "SET_CARRIED_ITEM" | "SWING" | "PLAYER_COMMAND" | "POSITION" | "CONTAINER_CLOSE" | "CONTAINER_CLICK" | "CONTAINER_ACK" | "SET_CREATIVE_MODE_SLOT" | "CONTAINER_BUTTON_CLICK" | "SIGN_UPDATE" | "SERVER_PING" | "DISCONNECT";
}
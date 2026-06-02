import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Direction } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { PreNettyPacketType } from '../../../../../../../net/raphimc/vialegacy/api/splitter/PreNettyPacketType.d.ts'
export class ServerboundPacketsb1_4 extends Enum<ServerboundPacketsb1_4> implements ServerboundPacketType, PreNettyPacketType {
    static CHAT: ServerboundPacketsb1_4;
    static CONTAINER_ACK: ServerboundPacketsb1_4;
    static CONTAINER_CLICK: ServerboundPacketsb1_4;
    static CONTAINER_CLOSE: ServerboundPacketsb1_4;
    static DISCONNECT: ServerboundPacketsb1_4;
    static HANDSHAKE: ServerboundPacketsb1_4;
    static INTERACT: ServerboundPacketsb1_4;
    static KEEP_ALIVE: ServerboundPacketsb1_4;
    static LOGIN: ServerboundPacketsb1_4;
    static MOVE_PLAYER_POS: ServerboundPacketsb1_4;
    static MOVE_PLAYER_POS_ROT: ServerboundPacketsb1_4;
    static MOVE_PLAYER_ROT: ServerboundPacketsb1_4;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPacketsb1_4;
    static PLAYER_ACTION: ServerboundPacketsb1_4;
    static PLAYER_COMMAND: ServerboundPacketsb1_4;
    static POSITION: ServerboundPacketsb1_4;
    static RESPAWN: ServerboundPacketsb1_4;
    static SET_CARRIED_ITEM: ServerboundPacketsb1_4;
    static SIGN_UPDATE: ServerboundPacketsb1_4;
    static SWING: ServerboundPacketsb1_4;
    static USE_ITEM_ON: ServerboundPacketsb1_4;
    static getPacket(paramarg0: number): ServerboundPacketsb1_4;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPacketsb1_4;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    name(): "KEEP_ALIVE" | "LOGIN" | "HANDSHAKE" | "CHAT" | "INTERACT" | "RESPAWN" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_ROT" | "MOVE_PLAYER_POS_ROT" | "PLAYER_ACTION" | "USE_ITEM_ON" | "SET_CARRIED_ITEM" | "SWING" | "PLAYER_COMMAND" | "POSITION" | "CONTAINER_CLOSE" | "CONTAINER_CLICK" | "CONTAINER_ACK" | "SIGN_UPDATE" | "DISCONNECT";
}
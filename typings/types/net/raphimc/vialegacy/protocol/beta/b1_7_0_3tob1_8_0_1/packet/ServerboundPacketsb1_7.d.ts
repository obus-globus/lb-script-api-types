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
export class ServerboundPacketsb1_7 extends Enum<ServerboundPacketsb1_7> implements ServerboundPacketType, PreNettyPacketType {
    static CHAT: ServerboundPacketsb1_7;
    static CONTAINER_ACK: ServerboundPacketsb1_7;
    static CONTAINER_CLICK: ServerboundPacketsb1_7;
    static CONTAINER_CLOSE: ServerboundPacketsb1_7;
    static DISCONNECT: ServerboundPacketsb1_7;
    static HANDSHAKE: ServerboundPacketsb1_7;
    static INTERACT: ServerboundPacketsb1_7;
    static KEEP_ALIVE: ServerboundPacketsb1_7;
    static LOGIN: ServerboundPacketsb1_7;
    static MOVE_PLAYER_POS: ServerboundPacketsb1_7;
    static MOVE_PLAYER_POS_ROT: ServerboundPacketsb1_7;
    static MOVE_PLAYER_ROT: ServerboundPacketsb1_7;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPacketsb1_7;
    static PLAYER_ACTION: ServerboundPacketsb1_7;
    static PLAYER_COMMAND: ServerboundPacketsb1_7;
    static POSITION: ServerboundPacketsb1_7;
    static RESPAWN: ServerboundPacketsb1_7;
    static SET_CARRIED_ITEM: ServerboundPacketsb1_7;
    static SIGN_UPDATE: ServerboundPacketsb1_7;
    static SWING: ServerboundPacketsb1_7;
    static USE_ITEM_ON: ServerboundPacketsb1_7;
    static getPacket(paramarg0: number): ServerboundPacketsb1_7;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPacketsb1_7;
    static values(): ServerboundPacketsb1_7[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    state(): State;
    name(): "KEEP_ALIVE" | "LOGIN" | "HANDSHAKE" | "CHAT" | "INTERACT" | "RESPAWN" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_ROT" | "MOVE_PLAYER_POS_ROT" | "PLAYER_ACTION" | "USE_ITEM_ON" | "SET_CARRIED_ITEM" | "SWING" | "PLAYER_COMMAND" | "POSITION" | "CONTAINER_CLOSE" | "CONTAINER_CLICK" | "CONTAINER_ACK" | "SIGN_UPDATE" | "DISCONNECT";
}
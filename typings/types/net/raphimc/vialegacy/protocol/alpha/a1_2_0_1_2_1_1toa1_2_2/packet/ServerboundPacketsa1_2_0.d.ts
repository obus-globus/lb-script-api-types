import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Direction } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { PreNettyPacketType } from '../../../../../../../net/raphimc/vialegacy/api/splitter/PreNettyPacketType.d.ts'
export class ServerboundPacketsa1_2_0 extends Enum<ServerboundPacketsa1_2_0> implements ServerboundPacketType, PreNettyPacketType {
    static BLOCK_ENTITY_DATA: ServerboundPacketsa1_2_0;
    static CHAT: ServerboundPacketsa1_2_0;
    static DISCONNECT: ServerboundPacketsa1_2_0;
    static HANDSHAKE: ServerboundPacketsa1_2_0;
    static KEEP_ALIVE: ServerboundPacketsa1_2_0;
    static LOGIN: ServerboundPacketsa1_2_0;
    static MOVE_PLAYER_POS: ServerboundPacketsa1_2_0;
    static MOVE_PLAYER_POS_ROT: ServerboundPacketsa1_2_0;
    static MOVE_PLAYER_ROT: ServerboundPacketsa1_2_0;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPacketsa1_2_0;
    static PLAYER_ACTION: ServerboundPacketsa1_2_0;
    static PLAYER_INVENTORY: ServerboundPacketsa1_2_0;
    static SET_CARRIED_ITEM: ServerboundPacketsa1_2_0;
    static SPAWN_ITEM: ServerboundPacketsa1_2_0;
    static SWING: ServerboundPacketsa1_2_0;
    static USE_ITEM_ON: ServerboundPacketsa1_2_0;
    static getPacket(paramarg0: number): ServerboundPacketsa1_2_0;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ServerboundPacketsa1_2_0;
    static values(): ServerboundPacketsa1_2_0[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    state(): State;
    name(): "KEEP_ALIVE" | "LOGIN" | "HANDSHAKE" | "CHAT" | "PLAYER_INVENTORY" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_ROT" | "MOVE_PLAYER_POS_ROT" | "PLAYER_ACTION" | "USE_ITEM_ON" | "SET_CARRIED_ITEM" | "SWING" | "SPAWN_ITEM" | "BLOCK_ENTITY_DATA" | "DISCONNECT";
}
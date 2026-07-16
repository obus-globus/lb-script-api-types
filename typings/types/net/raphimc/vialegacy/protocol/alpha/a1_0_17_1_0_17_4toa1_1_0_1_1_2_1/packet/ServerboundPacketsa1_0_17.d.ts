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
export class ServerboundPacketsa1_0_17 extends Enum<ServerboundPacketsa1_0_17> implements ServerboundPacketType, PreNettyPacketType {
    static CHAT: ServerboundPacketsa1_0_17;
    static DISCONNECT: ServerboundPacketsa1_0_17;
    static HANDSHAKE: ServerboundPacketsa1_0_17;
    static KEEP_ALIVE: ServerboundPacketsa1_0_17;
    static LOGIN: ServerboundPacketsa1_0_17;
    static MOVE_PLAYER_POS: ServerboundPacketsa1_0_17;
    static MOVE_PLAYER_POS_ROT: ServerboundPacketsa1_0_17;
    static MOVE_PLAYER_ROT: ServerboundPacketsa1_0_17;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPacketsa1_0_17;
    static PLAYER_ACTION: ServerboundPacketsa1_0_17;
    static SET_CARRIED_ITEM: ServerboundPacketsa1_0_17;
    static SPAWN_ITEM: ServerboundPacketsa1_0_17;
    static SWING: ServerboundPacketsa1_0_17;
    static USE_ITEM_ON: ServerboundPacketsa1_0_17;
    static getPacket(paramarg0: number): ServerboundPacketsa1_0_17;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPacketsa1_0_17;
    static values(): ServerboundPacketsa1_0_17[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    state(): State;
    name(): "KEEP_ALIVE" | "LOGIN" | "HANDSHAKE" | "CHAT" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_ROT" | "MOVE_PLAYER_POS_ROT" | "PLAYER_ACTION" | "USE_ITEM_ON" | "SET_CARRIED_ITEM" | "SWING" | "SPAWN_ITEM" | "DISCONNECT";
}
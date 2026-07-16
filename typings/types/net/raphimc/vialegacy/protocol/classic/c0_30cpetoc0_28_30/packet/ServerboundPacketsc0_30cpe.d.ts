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
export class ServerboundPacketsc0_30cpe extends Enum<ServerboundPacketsc0_30cpe> implements ServerboundPacketType, PreNettyPacketType {
    static CHAT: ServerboundPacketsc0_30cpe;
    static EXTENSION_PROTOCOL_ENTRY: ServerboundPacketsc0_30cpe;
    static EXTENSION_PROTOCOL_INFO: ServerboundPacketsc0_30cpe;
    static EXT_CUSTOM_BLOCKS_SUPPORT_LEVEL: ServerboundPacketsc0_30cpe;
    static EXT_TWO_WAY_PING: ServerboundPacketsc0_30cpe;
    static LOGIN: ServerboundPacketsc0_30cpe;
    static MOVE_PLAYER_POS_ROT: ServerboundPacketsc0_30cpe;
    static USE_ITEM_ON: ServerboundPacketsc0_30cpe;
    static getPacket(paramarg0: number): ServerboundPacketsc0_30cpe;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPacketsc0_30cpe;
    static values(): ServerboundPacketsc0_30cpe[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    state(): State;
    name(): "LOGIN" | "USE_ITEM_ON" | "MOVE_PLAYER_POS_ROT" | "CHAT" | "EXTENSION_PROTOCOL_INFO" | "EXTENSION_PROTOCOL_ENTRY" | "EXT_CUSTOM_BLOCKS_SUPPORT_LEVEL" | "EXT_TWO_WAY_PING";
}
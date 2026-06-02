import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Direction } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { PreNettyPacketType } from '../../../../../../../net/raphimc/vialegacy/api/splitter/PreNettyPacketType.d.ts'
export class ServerboundPacketsc0_15a extends Enum<ServerboundPacketsc0_15a> implements ServerboundPacketType, PreNettyPacketType {
    static LOGIN: ServerboundPacketsc0_15a;
    static MOVE_PLAYER_POS_ROT: ServerboundPacketsc0_15a;
    static USE_ITEM_ON: ServerboundPacketsc0_15a;
    static getPacket(paramarg0: number): ServerboundPacketsc0_15a;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPacketsc0_15a;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    name(): "LOGIN" | "USE_ITEM_ON" | "MOVE_PLAYER_POS_ROT";
}
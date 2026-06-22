import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { PreNettyPacketType } from '../../../../../../../net/raphimc/vialegacy/api/splitter/PreNettyPacketType.d.ts'
export class ClientboundPacketsc0_28 extends Enum<ClientboundPacketsc0_28> implements ClientboundPacketType, PreNettyPacketType {
    static ADD_PLAYER: ClientboundPacketsc0_28;
    static BLOCK_UPDATE: ClientboundPacketsc0_28;
    static CHAT: ClientboundPacketsc0_28;
    static DISCONNECT: ClientboundPacketsc0_28;
    static KEEP_ALIVE: ClientboundPacketsc0_28;
    static LEVEL_DATA: ClientboundPacketsc0_28;
    static LEVEL_FINALIZE: ClientboundPacketsc0_28;
    static LEVEL_INIT: ClientboundPacketsc0_28;
    static LOGIN: ClientboundPacketsc0_28;
    static MOVE_ENTITY_POS: ClientboundPacketsc0_28;
    static MOVE_ENTITY_POS_ROT: ClientboundPacketsc0_28;
    static MOVE_ENTITY_ROT: ClientboundPacketsc0_28;
    static OP_LEVEL_UPDATE: ClientboundPacketsc0_28;
    static REMOVE_ENTITIES: ClientboundPacketsc0_28;
    static TELEPORT_ENTITY: ClientboundPacketsc0_28;
    static getPacket(paramarg0: number): ClientboundPacketsc0_28;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundPacketsc0_28;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    state(): State;
    name(): "LOGIN" | "KEEP_ALIVE" | "LEVEL_INIT" | "LEVEL_DATA" | "LEVEL_FINALIZE" | "BLOCK_UPDATE" | "ADD_PLAYER" | "TELEPORT_ENTITY" | "MOVE_ENTITY_POS_ROT" | "MOVE_ENTITY_POS" | "MOVE_ENTITY_ROT" | "REMOVE_ENTITIES" | "CHAT" | "DISCONNECT" | "OP_LEVEL_UPDATE";
}
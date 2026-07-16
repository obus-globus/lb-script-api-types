import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { PreNettyPacketType } from '../../../../../../../net/raphimc/vialegacy/api/splitter/PreNettyPacketType.d.ts'
export class ClientboundPacketsc0_19a extends Enum<ClientboundPacketsc0_19a> implements ClientboundPacketType, PreNettyPacketType {
    static ADD_PLAYER: ClientboundPacketsc0_19a;
    static BLOCK_UPDATE: ClientboundPacketsc0_19a;
    static CHAT: ClientboundPacketsc0_19a;
    static DISCONNECT: ClientboundPacketsc0_19a;
    static KEEP_ALIVE: ClientboundPacketsc0_19a;
    static LEVEL_DATA: ClientboundPacketsc0_19a;
    static LEVEL_FINALIZE: ClientboundPacketsc0_19a;
    static LEVEL_INIT: ClientboundPacketsc0_19a;
    static LOGIN: ClientboundPacketsc0_19a;
    static MOVE_ENTITY_POS: ClientboundPacketsc0_19a;
    static MOVE_ENTITY_POS_ROT: ClientboundPacketsc0_19a;
    static MOVE_ENTITY_ROT: ClientboundPacketsc0_19a;
    static REMOVE_ENTITIES: ClientboundPacketsc0_19a;
    static TELEPORT_ENTITY: ClientboundPacketsc0_19a;
    static getPacket(paramarg0: number): ClientboundPacketsc0_19a;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ClientboundPacketsc0_19a;
    static values(): ClientboundPacketsc0_19a[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    state(): State;
    name(): "LOGIN" | "KEEP_ALIVE" | "LEVEL_INIT" | "LEVEL_DATA" | "LEVEL_FINALIZE" | "BLOCK_UPDATE" | "ADD_PLAYER" | "TELEPORT_ENTITY" | "MOVE_ENTITY_POS_ROT" | "MOVE_ENTITY_POS" | "MOVE_ENTITY_ROT" | "REMOVE_ENTITIES" | "CHAT" | "DISCONNECT";
}
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
export class ClientboundPacketsc0_30cpe extends Enum<ClientboundPacketsc0_30cpe> implements ClientboundPacketType, PreNettyPacketType {
    static ADD_PLAYER: ClientboundPacketsc0_30cpe;
    static BLOCK_UPDATE: ClientboundPacketsc0_30cpe;
    static CHAT: ClientboundPacketsc0_30cpe;
    static DISCONNECT: ClientboundPacketsc0_30cpe;
    static EXTENSION_PROTOCOL_ENTRY: ClientboundPacketsc0_30cpe;
    static EXTENSION_PROTOCOL_INFO: ClientboundPacketsc0_30cpe;
    static EXT_BULK_BLOCK_UPDATE: ClientboundPacketsc0_30cpe;
    static EXT_CUSTOM_BLOCKS_SUPPORT_LEVEL: ClientboundPacketsc0_30cpe;
    static EXT_HACK_CONTROL: ClientboundPacketsc0_30cpe;
    static EXT_SET_BLOCK_PERMISSION: ClientboundPacketsc0_30cpe;
    static EXT_TWO_WAY_PING: ClientboundPacketsc0_30cpe;
    static KEEP_ALIVE: ClientboundPacketsc0_30cpe;
    static LEVEL_DATA: ClientboundPacketsc0_30cpe;
    static LEVEL_FINALIZE: ClientboundPacketsc0_30cpe;
    static LEVEL_INIT: ClientboundPacketsc0_30cpe;
    static LOGIN: ClientboundPacketsc0_30cpe;
    static MOVE_ENTITY_POS: ClientboundPacketsc0_30cpe;
    static MOVE_ENTITY_POS_ROT: ClientboundPacketsc0_30cpe;
    static MOVE_ENTITY_ROT: ClientboundPacketsc0_30cpe;
    static OP_LEVEL_UPDATE: ClientboundPacketsc0_30cpe;
    static REMOVE_ENTITIES: ClientboundPacketsc0_30cpe;
    static TELEPORT_ENTITY: ClientboundPacketsc0_30cpe;
    static getPacket(paramarg0: number): ClientboundPacketsc0_30cpe;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundPacketsc0_30cpe;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    state(): State;
    name(): "LOGIN" | "KEEP_ALIVE" | "LEVEL_INIT" | "LEVEL_DATA" | "LEVEL_FINALIZE" | "BLOCK_UPDATE" | "ADD_PLAYER" | "TELEPORT_ENTITY" | "MOVE_ENTITY_POS_ROT" | "MOVE_ENTITY_POS" | "MOVE_ENTITY_ROT" | "REMOVE_ENTITIES" | "CHAT" | "DISCONNECT" | "OP_LEVEL_UPDATE" | "EXTENSION_PROTOCOL_INFO" | "EXTENSION_PROTOCOL_ENTRY" | "EXT_CUSTOM_BLOCKS_SUPPORT_LEVEL" | "EXT_SET_BLOCK_PERMISSION" | "EXT_HACK_CONTROL" | "EXT_BULK_BLOCK_UPDATE" | "EXT_TWO_WAY_PING" | "EnvWeatherType";
}
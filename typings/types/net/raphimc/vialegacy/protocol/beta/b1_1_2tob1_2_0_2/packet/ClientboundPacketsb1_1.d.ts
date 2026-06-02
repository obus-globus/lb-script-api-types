import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { PreNettyPacketType } from '../../../../../../../net/raphimc/vialegacy/api/splitter/PreNettyPacketType.d.ts'
export class ClientboundPacketsb1_1 extends Enum<ClientboundPacketsb1_1> implements ClientboundPacketType, PreNettyPacketType {
    static ADD_ENTITY: ClientboundPacketsb1_1;
    static ADD_MOB: ClientboundPacketsb1_1;
    static ADD_PLAYER: ClientboundPacketsb1_1;
    static ANIMATE: ClientboundPacketsb1_1;
    static BLOCK_UPDATE: ClientboundPacketsb1_1;
    static CHAT: ClientboundPacketsb1_1;
    static CHUNK_BLOCKS_UPDATE: ClientboundPacketsb1_1;
    static CONTAINER_ACK: ClientboundPacketsb1_1;
    static CONTAINER_CLOSE: ClientboundPacketsb1_1;
    static CONTAINER_SET_CONTENT: ClientboundPacketsb1_1;
    static CONTAINER_SET_DATA: ClientboundPacketsb1_1;
    static CONTAINER_SET_SLOT: ClientboundPacketsb1_1;
    static DISCONNECT: ClientboundPacketsb1_1;
    static ENTITY_EVENT: ClientboundPacketsb1_1;
    static EXPLODE: ClientboundPacketsb1_1;
    static HANDSHAKE: ClientboundPacketsb1_1;
    static KEEP_ALIVE: ClientboundPacketsb1_1;
    static LEVEL_CHUNK: ClientboundPacketsb1_1;
    static LOGIN: ClientboundPacketsb1_1;
    static MOVE_ENTITY: ClientboundPacketsb1_1;
    static MOVE_ENTITY_POS: ClientboundPacketsb1_1;
    static MOVE_ENTITY_POS_ROT: ClientboundPacketsb1_1;
    static MOVE_ENTITY_ROT: ClientboundPacketsb1_1;
    static MOVE_PLAYER_POS: ClientboundPacketsb1_1;
    static MOVE_PLAYER_ROT: ClientboundPacketsb1_1;
    static MOVE_PLAYER_STATUS_ONLY: ClientboundPacketsb1_1;
    static OPEN_SCREEN: ClientboundPacketsb1_1;
    static PLAYER_POSITION: ClientboundPacketsb1_1;
    static PRE_CHUNK: ClientboundPacketsb1_1;
    static REMOVE_ENTITIES: ClientboundPacketsb1_1;
    static RESPAWN: ClientboundPacketsb1_1;
    static SET_DEFAULT_SPAWN_POSITION: ClientboundPacketsb1_1;
    static SET_ENTITY_LINK: ClientboundPacketsb1_1;
    static SET_ENTITY_MOTION: ClientboundPacketsb1_1;
    static SET_EQUIPPED_ITEM: ClientboundPacketsb1_1;
    static SET_HEALTH: ClientboundPacketsb1_1;
    static SET_TIME: ClientboundPacketsb1_1;
    static SPAWN_ITEM: ClientboundPacketsb1_1;
    static TAKE_ITEM_ENTITY: ClientboundPacketsb1_1;
    static TELEPORT_ENTITY: ClientboundPacketsb1_1;
    static UPDATE_SIGN: ClientboundPacketsb1_1;
    static getPacket(paramarg0: number): ClientboundPacketsb1_1;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundPacketsb1_1;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    name(): "KEEP_ALIVE" | "LOGIN" | "HANDSHAKE" | "CHAT" | "SET_TIME" | "SET_EQUIPPED_ITEM" | "SET_DEFAULT_SPAWN_POSITION" | "SET_HEALTH" | "RESPAWN" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_ROT" | "PLAYER_POSITION" | "ANIMATE" | "ADD_PLAYER" | "SPAWN_ITEM" | "TAKE_ITEM_ENTITY" | "ADD_ENTITY" | "ADD_MOB" | "SET_ENTITY_MOTION" | "REMOVE_ENTITIES" | "MOVE_ENTITY" | "MOVE_ENTITY_POS" | "MOVE_ENTITY_ROT" | "MOVE_ENTITY_POS_ROT" | "TELEPORT_ENTITY" | "ENTITY_EVENT" | "SET_ENTITY_LINK" | "PRE_CHUNK" | "LEVEL_CHUNK" | "CHUNK_BLOCKS_UPDATE" | "BLOCK_UPDATE" | "EXPLODE" | "OPEN_SCREEN" | "CONTAINER_CLOSE" | "CONTAINER_SET_SLOT" | "CONTAINER_SET_CONTENT" | "CONTAINER_SET_DATA" | "CONTAINER_ACK" | "UPDATE_SIGN" | "DISCONNECT";
}
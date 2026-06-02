import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { PreNettyPacketType } from '../../../../../../../net/raphimc/vialegacy/api/splitter/PreNettyPacketType.d.ts'
export class ClientboundPacketsb1_8 extends Enum<ClientboundPacketsb1_8> implements ClientboundPacketType, PreNettyPacketType {
    static ADD_ENTITY: ClientboundPacketsb1_8;
    static ADD_EXPERIENCE_ORB: ClientboundPacketsb1_8;
    static ADD_GLOBAL_ENTITY: ClientboundPacketsb1_8;
    static ADD_MOB: ClientboundPacketsb1_8;
    static ADD_PAINTING: ClientboundPacketsb1_8;
    static ADD_PLAYER: ClientboundPacketsb1_8;
    static ANIMATE: ClientboundPacketsb1_8;
    static AWARD_STATS: ClientboundPacketsb1_8;
    static BLOCK_EVENT: ClientboundPacketsb1_8;
    static BLOCK_UPDATE: ClientboundPacketsb1_8;
    static CHAT: ClientboundPacketsb1_8;
    static CHUNK_BLOCKS_UPDATE: ClientboundPacketsb1_8;
    static CONTAINER_ACK: ClientboundPacketsb1_8;
    static CONTAINER_CLOSE: ClientboundPacketsb1_8;
    static CONTAINER_SET_CONTENT: ClientboundPacketsb1_8;
    static CONTAINER_SET_DATA: ClientboundPacketsb1_8;
    static CONTAINER_SET_SLOT: ClientboundPacketsb1_8;
    static DISCONNECT: ClientboundPacketsb1_8;
    static ENTITY_EVENT: ClientboundPacketsb1_8;
    static EXPLODE: ClientboundPacketsb1_8;
    static GAME_EVENT: ClientboundPacketsb1_8;
    static HANDSHAKE: ClientboundPacketsb1_8;
    static KEEP_ALIVE: ClientboundPacketsb1_8;
    static LEVEL_CHUNK: ClientboundPacketsb1_8;
    static LEVEL_EVENT: ClientboundPacketsb1_8;
    static LOGIN: ClientboundPacketsb1_8;
    static MAP_ITEM_DATA: ClientboundPacketsb1_8;
    static MOVE_ENTITY: ClientboundPacketsb1_8;
    static MOVE_ENTITY_POS: ClientboundPacketsb1_8;
    static MOVE_ENTITY_POS_ROT: ClientboundPacketsb1_8;
    static MOVE_ENTITY_ROT: ClientboundPacketsb1_8;
    static MOVE_PLAYER_POS: ClientboundPacketsb1_8;
    static MOVE_PLAYER_ROT: ClientboundPacketsb1_8;
    static MOVE_PLAYER_STATUS_ONLY: ClientboundPacketsb1_8;
    static OPEN_SCREEN: ClientboundPacketsb1_8;
    static PLAYER_INFO: ClientboundPacketsb1_8;
    static PLAYER_POSITION: ClientboundPacketsb1_8;
    static PLAYER_SLEEP: ClientboundPacketsb1_8;
    static PRE_CHUNK: ClientboundPacketsb1_8;
    static REMOVE_ENTITIES: ClientboundPacketsb1_8;
    static REMOVE_MOB_EFFECT: ClientboundPacketsb1_8;
    static RESPAWN: ClientboundPacketsb1_8;
    static SET_CREATIVE_MODE_SLOT: ClientboundPacketsb1_8;
    static SET_DEFAULT_SPAWN_POSITION: ClientboundPacketsb1_8;
    static SET_ENTITY_DATA: ClientboundPacketsb1_8;
    static SET_ENTITY_LINK: ClientboundPacketsb1_8;
    static SET_ENTITY_MOTION: ClientboundPacketsb1_8;
    static SET_EQUIPPED_ITEM: ClientboundPacketsb1_8;
    static SET_EXPERIENCE: ClientboundPacketsb1_8;
    static SET_HEALTH: ClientboundPacketsb1_8;
    static SET_TIME: ClientboundPacketsb1_8;
    static SPAWN_ITEM: ClientboundPacketsb1_8;
    static TAKE_ITEM_ENTITY: ClientboundPacketsb1_8;
    static TELEPORT_ENTITY: ClientboundPacketsb1_8;
    static UPDATE_MOB_EFFECT: ClientboundPacketsb1_8;
    static UPDATE_SIGN: ClientboundPacketsb1_8;
    static getPacket(paramarg0: number): ClientboundPacketsb1_8;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundPacketsb1_8;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    name(): "KEEP_ALIVE" | "LOGIN" | "HANDSHAKE" | "CHAT" | "SET_TIME" | "SET_EQUIPPED_ITEM" | "SET_DEFAULT_SPAWN_POSITION" | "SET_HEALTH" | "RESPAWN" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_ROT" | "PLAYER_POSITION" | "PLAYER_SLEEP" | "ANIMATE" | "ADD_PLAYER" | "SPAWN_ITEM" | "TAKE_ITEM_ENTITY" | "ADD_ENTITY" | "ADD_MOB" | "ADD_PAINTING" | "ADD_EXPERIENCE_ORB" | "SET_ENTITY_MOTION" | "REMOVE_ENTITIES" | "MOVE_ENTITY" | "MOVE_ENTITY_POS" | "MOVE_ENTITY_ROT" | "MOVE_ENTITY_POS_ROT" | "TELEPORT_ENTITY" | "ENTITY_EVENT" | "SET_ENTITY_LINK" | "SET_ENTITY_DATA" | "UPDATE_MOB_EFFECT" | "REMOVE_MOB_EFFECT" | "SET_EXPERIENCE" | "PRE_CHUNK" | "LEVEL_CHUNK" | "CHUNK_BLOCKS_UPDATE" | "BLOCK_UPDATE" | "BLOCK_EVENT" | "EXPLODE" | "LEVEL_EVENT" | "GAME_EVENT" | "ADD_GLOBAL_ENTITY" | "OPEN_SCREEN" | "CONTAINER_CLOSE" | "CONTAINER_SET_SLOT" | "CONTAINER_SET_CONTENT" | "CONTAINER_SET_DATA" | "CONTAINER_ACK" | "SET_CREATIVE_MODE_SLOT" | "UPDATE_SIGN" | "MAP_ITEM_DATA" | "AWARD_STATS" | "PLAYER_INFO" | "DISCONNECT";
}
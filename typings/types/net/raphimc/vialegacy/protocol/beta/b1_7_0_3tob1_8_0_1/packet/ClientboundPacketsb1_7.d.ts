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
export class ClientboundPacketsb1_7 extends Enum<ClientboundPacketsb1_7> implements ClientboundPacketType, PreNettyPacketType {
    static ADD_ENTITY: ClientboundPacketsb1_7;
    static ADD_GLOBAL_ENTITY: ClientboundPacketsb1_7;
    static ADD_MOB: ClientboundPacketsb1_7;
    static ADD_PAINTING: ClientboundPacketsb1_7;
    static ADD_PLAYER: ClientboundPacketsb1_7;
    static ANIMATE: ClientboundPacketsb1_7;
    static AWARD_STATS: ClientboundPacketsb1_7;
    static BLOCK_EVENT: ClientboundPacketsb1_7;
    static BLOCK_UPDATE: ClientboundPacketsb1_7;
    static CHAT: ClientboundPacketsb1_7;
    static CHUNK_BLOCKS_UPDATE: ClientboundPacketsb1_7;
    static CONTAINER_ACK: ClientboundPacketsb1_7;
    static CONTAINER_CLOSE: ClientboundPacketsb1_7;
    static CONTAINER_SET_CONTENT: ClientboundPacketsb1_7;
    static CONTAINER_SET_DATA: ClientboundPacketsb1_7;
    static CONTAINER_SET_SLOT: ClientboundPacketsb1_7;
    static DISCONNECT: ClientboundPacketsb1_7;
    static ENTITY_EVENT: ClientboundPacketsb1_7;
    static EXPLODE: ClientboundPacketsb1_7;
    static GAME_EVENT: ClientboundPacketsb1_7;
    static HANDSHAKE: ClientboundPacketsb1_7;
    static KEEP_ALIVE: ClientboundPacketsb1_7;
    static LEVEL_CHUNK: ClientboundPacketsb1_7;
    static LEVEL_EVENT: ClientboundPacketsb1_7;
    static LOGIN: ClientboundPacketsb1_7;
    static MAP_ITEM_DATA: ClientboundPacketsb1_7;
    static MOVE_ENTITY: ClientboundPacketsb1_7;
    static MOVE_ENTITY_POS: ClientboundPacketsb1_7;
    static MOVE_ENTITY_POS_ROT: ClientboundPacketsb1_7;
    static MOVE_ENTITY_ROT: ClientboundPacketsb1_7;
    static MOVE_PLAYER_POS: ClientboundPacketsb1_7;
    static MOVE_PLAYER_ROT: ClientboundPacketsb1_7;
    static MOVE_PLAYER_STATUS_ONLY: ClientboundPacketsb1_7;
    static OPEN_SCREEN: ClientboundPacketsb1_7;
    static PLAYER_POSITION: ClientboundPacketsb1_7;
    static PLAYER_SLEEP: ClientboundPacketsb1_7;
    static PRE_CHUNK: ClientboundPacketsb1_7;
    static REMOVE_ENTITIES: ClientboundPacketsb1_7;
    static RESPAWN: ClientboundPacketsb1_7;
    static SET_DEFAULT_SPAWN_POSITION: ClientboundPacketsb1_7;
    static SET_ENTITY_DATA: ClientboundPacketsb1_7;
    static SET_ENTITY_LINK: ClientboundPacketsb1_7;
    static SET_ENTITY_MOTION: ClientboundPacketsb1_7;
    static SET_EQUIPPED_ITEM: ClientboundPacketsb1_7;
    static SET_HEALTH: ClientboundPacketsb1_7;
    static SET_TIME: ClientboundPacketsb1_7;
    static SPAWN_ITEM: ClientboundPacketsb1_7;
    static TAKE_ITEM_ENTITY: ClientboundPacketsb1_7;
    static TELEPORT_ENTITY: ClientboundPacketsb1_7;
    static UPDATE_SIGN: ClientboundPacketsb1_7;
    static getPacket(paramarg0: number): ClientboundPacketsb1_7;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundPacketsb1_7;
    static values(): ClientboundPacketsb1_7[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    state(): State;
    name(): "KEEP_ALIVE" | "LOGIN" | "HANDSHAKE" | "CHAT" | "SET_TIME" | "SET_EQUIPPED_ITEM" | "SET_DEFAULT_SPAWN_POSITION" | "SET_HEALTH" | "RESPAWN" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_ROT" | "PLAYER_POSITION" | "PLAYER_SLEEP" | "ANIMATE" | "ADD_PLAYER" | "SPAWN_ITEM" | "TAKE_ITEM_ENTITY" | "ADD_ENTITY" | "ADD_MOB" | "ADD_PAINTING" | "SET_ENTITY_MOTION" | "REMOVE_ENTITIES" | "MOVE_ENTITY" | "MOVE_ENTITY_POS" | "MOVE_ENTITY_ROT" | "MOVE_ENTITY_POS_ROT" | "TELEPORT_ENTITY" | "ENTITY_EVENT" | "SET_ENTITY_LINK" | "SET_ENTITY_DATA" | "PRE_CHUNK" | "LEVEL_CHUNK" | "CHUNK_BLOCKS_UPDATE" | "BLOCK_UPDATE" | "BLOCK_EVENT" | "EXPLODE" | "LEVEL_EVENT" | "GAME_EVENT" | "ADD_GLOBAL_ENTITY" | "OPEN_SCREEN" | "CONTAINER_CLOSE" | "CONTAINER_SET_SLOT" | "CONTAINER_SET_CONTENT" | "CONTAINER_SET_DATA" | "CONTAINER_ACK" | "UPDATE_SIGN" | "MAP_ITEM_DATA" | "AWARD_STATS" | "DISCONNECT";
}
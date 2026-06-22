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
export class ClientboundPackets1_0_0 extends Enum<ClientboundPackets1_0_0> implements ClientboundPacketType, PreNettyPacketType {
    static ADD_ENTITY: ClientboundPackets1_0_0;
    static ADD_EXPERIENCE_ORB: ClientboundPackets1_0_0;
    static ADD_GLOBAL_ENTITY: ClientboundPackets1_0_0;
    static ADD_MOB: ClientboundPackets1_0_0;
    static ADD_PAINTING: ClientboundPackets1_0_0;
    static ADD_PLAYER: ClientboundPackets1_0_0;
    static ANIMATE: ClientboundPackets1_0_0;
    static AWARD_STATS: ClientboundPackets1_0_0;
    static BLOCK_EVENT: ClientboundPackets1_0_0;
    static BLOCK_UPDATE: ClientboundPackets1_0_0;
    static CHAT: ClientboundPackets1_0_0;
    static CHUNK_BLOCKS_UPDATE: ClientboundPackets1_0_0;
    static CONTAINER_ACK: ClientboundPackets1_0_0;
    static CONTAINER_CLOSE: ClientboundPackets1_0_0;
    static CONTAINER_SET_CONTENT: ClientboundPackets1_0_0;
    static CONTAINER_SET_DATA: ClientboundPackets1_0_0;
    static CONTAINER_SET_SLOT: ClientboundPackets1_0_0;
    static DISCONNECT: ClientboundPackets1_0_0;
    static ENTITY_EVENT: ClientboundPackets1_0_0;
    static EXPLODE: ClientboundPackets1_0_0;
    static GAME_EVENT: ClientboundPackets1_0_0;
    static HANDSHAKE: ClientboundPackets1_0_0;
    static KEEP_ALIVE: ClientboundPackets1_0_0;
    static LEVEL_CHUNK: ClientboundPackets1_0_0;
    static LEVEL_EVENT: ClientboundPackets1_0_0;
    static LOGIN: ClientboundPackets1_0_0;
    static MAP_ITEM_DATA: ClientboundPackets1_0_0;
    static MOVE_ENTITY: ClientboundPackets1_0_0;
    static MOVE_ENTITY_POS: ClientboundPackets1_0_0;
    static MOVE_ENTITY_POS_ROT: ClientboundPackets1_0_0;
    static MOVE_ENTITY_ROT: ClientboundPackets1_0_0;
    static MOVE_PLAYER_POS: ClientboundPackets1_0_0;
    static MOVE_PLAYER_ROT: ClientboundPackets1_0_0;
    static MOVE_PLAYER_STATUS_ONLY: ClientboundPackets1_0_0;
    static OPEN_SCREEN: ClientboundPackets1_0_0;
    static PLAYER_INFO: ClientboundPackets1_0_0;
    static PLAYER_POSITION: ClientboundPackets1_0_0;
    static PLAYER_SLEEP: ClientboundPackets1_0_0;
    static PRE_CHUNK: ClientboundPackets1_0_0;
    static REMOVE_ENTITIES: ClientboundPackets1_0_0;
    static REMOVE_MOB_EFFECT: ClientboundPackets1_0_0;
    static RESPAWN: ClientboundPackets1_0_0;
    static SET_CREATIVE_MODE_SLOT: ClientboundPackets1_0_0;
    static SET_DEFAULT_SPAWN_POSITION: ClientboundPackets1_0_0;
    static SET_ENTITY_DATA: ClientboundPackets1_0_0;
    static SET_ENTITY_LINK: ClientboundPackets1_0_0;
    static SET_ENTITY_MOTION: ClientboundPackets1_0_0;
    static SET_EQUIPPED_ITEM: ClientboundPackets1_0_0;
    static SET_EXPERIENCE: ClientboundPackets1_0_0;
    static SET_HEALTH: ClientboundPackets1_0_0;
    static SET_TIME: ClientboundPackets1_0_0;
    static SPAWN_ITEM: ClientboundPackets1_0_0;
    static TAKE_ITEM_ENTITY: ClientboundPackets1_0_0;
    static TELEPORT_ENTITY: ClientboundPackets1_0_0;
    static UPDATE_MOB_EFFECT: ClientboundPackets1_0_0;
    static UPDATE_SIGN: ClientboundPackets1_0_0;
    static getPacket(paramarg0: number): ClientboundPackets1_0_0;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundPackets1_0_0;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    state(): State;
    name(): "KEEP_ALIVE" | "LOGIN" | "HANDSHAKE" | "CHAT" | "SET_TIME" | "SET_EQUIPPED_ITEM" | "SET_DEFAULT_SPAWN_POSITION" | "SET_HEALTH" | "RESPAWN" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_ROT" | "PLAYER_POSITION" | "PLAYER_SLEEP" | "ANIMATE" | "ADD_PLAYER" | "SPAWN_ITEM" | "TAKE_ITEM_ENTITY" | "ADD_ENTITY" | "ADD_MOB" | "ADD_PAINTING" | "ADD_EXPERIENCE_ORB" | "SET_ENTITY_MOTION" | "REMOVE_ENTITIES" | "MOVE_ENTITY" | "MOVE_ENTITY_POS" | "MOVE_ENTITY_ROT" | "MOVE_ENTITY_POS_ROT" | "TELEPORT_ENTITY" | "ENTITY_EVENT" | "SET_ENTITY_LINK" | "SET_ENTITY_DATA" | "UPDATE_MOB_EFFECT" | "REMOVE_MOB_EFFECT" | "SET_EXPERIENCE" | "PRE_CHUNK" | "LEVEL_CHUNK" | "CHUNK_BLOCKS_UPDATE" | "BLOCK_UPDATE" | "BLOCK_EVENT" | "EXPLODE" | "LEVEL_EVENT" | "GAME_EVENT" | "ADD_GLOBAL_ENTITY" | "OPEN_SCREEN" | "CONTAINER_CLOSE" | "CONTAINER_SET_SLOT" | "CONTAINER_SET_CONTENT" | "CONTAINER_SET_DATA" | "CONTAINER_ACK" | "SET_CREATIVE_MODE_SLOT" | "UPDATE_SIGN" | "MAP_ITEM_DATA" | "AWARD_STATS" | "PLAYER_INFO" | "DISCONNECT";
}
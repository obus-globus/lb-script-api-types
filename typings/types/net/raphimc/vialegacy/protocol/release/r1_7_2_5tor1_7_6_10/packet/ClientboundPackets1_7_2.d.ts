import type { ClientboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ClientboundPackets1_7_2 extends Enum<ClientboundPackets1_7_2> implements ClientboundPacketType {
    static ADD_ENTITY: ClientboundPackets1_7_2;
    static ADD_EXPERIENCE_ORB: ClientboundPackets1_7_2;
    static ADD_GLOBAL_ENTITY: ClientboundPackets1_7_2;
    static ADD_MOB: ClientboundPackets1_7_2;
    static ADD_PAINTING: ClientboundPackets1_7_2;
    static ADD_PLAYER: ClientboundPackets1_7_2;
    static ANIMATE: ClientboundPackets1_7_2;
    static AWARD_STATS: ClientboundPackets1_7_2;
    static BLOCK_DESTRUCTION: ClientboundPackets1_7_2;
    static BLOCK_ENTITY_DATA: ClientboundPackets1_7_2;
    static BLOCK_EVENT: ClientboundPackets1_7_2;
    static BLOCK_UPDATE: ClientboundPackets1_7_2;
    static CHAT: ClientboundPackets1_7_2;
    static CHUNK_BLOCKS_UPDATE: ClientboundPackets1_7_2;
    static COMMAND_SUGGESTIONS: ClientboundPackets1_7_2;
    static CONTAINER_ACK: ClientboundPackets1_7_2;
    static CONTAINER_CLOSE: ClientboundPackets1_7_2;
    static CONTAINER_SET_CONTENT: ClientboundPackets1_7_2;
    static CONTAINER_SET_DATA: ClientboundPackets1_7_2;
    static CONTAINER_SET_SLOT: ClientboundPackets1_7_2;
    static CUSTOM_PAYLOAD: ClientboundPackets1_7_2;
    static CUSTOM_SOUND: ClientboundPackets1_7_2;
    static DISCONNECT: ClientboundPackets1_7_2;
    static ENTITY_EVENT: ClientboundPackets1_7_2;
    static EXPLODE: ClientboundPackets1_7_2;
    static GAME_EVENT: ClientboundPackets1_7_2;
    static KEEP_ALIVE: ClientboundPackets1_7_2;
    static LEVEL_CHUNK: ClientboundPackets1_7_2;
    static LEVEL_EVENT: ClientboundPackets1_7_2;
    static LEVEL_PARTICLES: ClientboundPackets1_7_2;
    static LOGIN: ClientboundPackets1_7_2;
    static MAP_BULK_CHUNK: ClientboundPackets1_7_2;
    static MAP_ITEM_DATA: ClientboundPackets1_7_2;
    static MOVE_ENTITY: ClientboundPackets1_7_2;
    static MOVE_ENTITY_POS: ClientboundPackets1_7_2;
    static MOVE_ENTITY_POS_ROT: ClientboundPackets1_7_2;
    static MOVE_ENTITY_ROT: ClientboundPackets1_7_2;
    static OPEN_SCREEN: ClientboundPackets1_7_2;
    static OPEN_SIGN_EDITOR: ClientboundPackets1_7_2;
    static PLAYER_ABILITIES: ClientboundPackets1_7_2;
    static PLAYER_INFO: ClientboundPackets1_7_2;
    static PLAYER_POSITION: ClientboundPackets1_7_2;
    static PLAYER_SLEEP: ClientboundPackets1_7_2;
    static REMOVE_ENTITIES: ClientboundPackets1_7_2;
    static REMOVE_MOB_EFFECT: ClientboundPackets1_7_2;
    static RESPAWN: ClientboundPackets1_7_2;
    static ROTATE_HEAD: ClientboundPackets1_7_2;
    static SET_CARRIED_ITEM: ClientboundPackets1_7_2;
    static SET_DEFAULT_SPAWN_POSITION: ClientboundPackets1_7_2;
    static SET_DISPLAY_OBJECTIVE: ClientboundPackets1_7_2;
    static SET_ENTITY_DATA: ClientboundPackets1_7_2;
    static SET_ENTITY_LINK: ClientboundPackets1_7_2;
    static SET_ENTITY_MOTION: ClientboundPackets1_7_2;
    static SET_EQUIPPED_ITEM: ClientboundPackets1_7_2;
    static SET_EXPERIENCE: ClientboundPackets1_7_2;
    static SET_HEALTH: ClientboundPackets1_7_2;
    static SET_OBJECTIVE: ClientboundPackets1_7_2;
    static SET_PLAYER_TEAM: ClientboundPackets1_7_2;
    static SET_SCORE: ClientboundPackets1_7_2;
    static SET_TIME: ClientboundPackets1_7_2;
    static TAKE_ITEM_ENTITY: ClientboundPackets1_7_2;
    static TELEPORT_ENTITY: ClientboundPackets1_7_2;
    static UPDATE_ATTRIBUTES: ClientboundPackets1_7_2;
    static UPDATE_MOB_EFFECT: ClientboundPackets1_7_2;
    static UPDATE_SIGN: ClientboundPackets1_7_2;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ClientboundPackets1_7_2;
    static values(): ClientboundPackets1_7_2[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "KEEP_ALIVE" | "LOGIN" | "CHAT" | "SET_TIME" | "SET_EQUIPPED_ITEM" | "SET_DEFAULT_SPAWN_POSITION" | "SET_HEALTH" | "RESPAWN" | "PLAYER_POSITION" | "SET_CARRIED_ITEM" | "PLAYER_SLEEP" | "ANIMATE" | "ADD_PLAYER" | "TAKE_ITEM_ENTITY" | "ADD_ENTITY" | "ADD_MOB" | "ADD_PAINTING" | "ADD_EXPERIENCE_ORB" | "SET_ENTITY_MOTION" | "REMOVE_ENTITIES" | "MOVE_ENTITY" | "MOVE_ENTITY_POS" | "MOVE_ENTITY_ROT" | "MOVE_ENTITY_POS_ROT" | "TELEPORT_ENTITY" | "ROTATE_HEAD" | "ENTITY_EVENT" | "SET_ENTITY_LINK" | "SET_ENTITY_DATA" | "UPDATE_MOB_EFFECT" | "REMOVE_MOB_EFFECT" | "SET_EXPERIENCE" | "UPDATE_ATTRIBUTES" | "LEVEL_CHUNK" | "CHUNK_BLOCKS_UPDATE" | "BLOCK_UPDATE" | "BLOCK_EVENT" | "BLOCK_DESTRUCTION" | "MAP_BULK_CHUNK" | "EXPLODE" | "LEVEL_EVENT" | "CUSTOM_SOUND" | "LEVEL_PARTICLES" | "GAME_EVENT" | "ADD_GLOBAL_ENTITY" | "OPEN_SCREEN" | "CONTAINER_CLOSE" | "CONTAINER_SET_SLOT" | "CONTAINER_SET_CONTENT" | "CONTAINER_SET_DATA" | "CONTAINER_ACK" | "UPDATE_SIGN" | "MAP_ITEM_DATA" | "BLOCK_ENTITY_DATA" | "OPEN_SIGN_EDITOR" | "AWARD_STATS" | "PLAYER_INFO" | "PLAYER_ABILITIES" | "COMMAND_SUGGESTIONS" | "SET_OBJECTIVE" | "SET_SCORE" | "SET_DISPLAY_OBJECTIVE" | "SET_PLAYER_TEAM" | "CUSTOM_PAYLOAD" | "DISCONNECT";
}
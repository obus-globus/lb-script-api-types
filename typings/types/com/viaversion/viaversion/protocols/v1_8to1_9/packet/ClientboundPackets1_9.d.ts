import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ClientboundPackets1_9 extends Enum<ClientboundPackets1_9> implements ClientboundPacketType {
    static ADD_ENTITY: ClientboundPackets1_9;
    static ADD_EXPERIENCE_ORB: ClientboundPackets1_9;
    static ADD_GLOBAL_ENTITY: ClientboundPackets1_9;
    static ADD_MOB: ClientboundPackets1_9;
    static ADD_PAINTING: ClientboundPackets1_9;
    static ADD_PLAYER: ClientboundPackets1_9;
    static ANIMATE: ClientboundPackets1_9;
    static AWARD_STATS: ClientboundPackets1_9;
    static BLOCK_DESTRUCTION: ClientboundPackets1_9;
    static BLOCK_ENTITY_DATA: ClientboundPackets1_9;
    static BLOCK_EVENT: ClientboundPackets1_9;
    static BLOCK_UPDATE: ClientboundPackets1_9;
    static BOSS_EVENT: ClientboundPackets1_9;
    static CHANGE_DIFFICULTY: ClientboundPackets1_9;
    static CHAT: ClientboundPackets1_9;
    static CHUNK_BLOCKS_UPDATE: ClientboundPackets1_9;
    static COMMAND_SUGGESTIONS: ClientboundPackets1_9;
    static CONTAINER_ACK: ClientboundPackets1_9;
    static CONTAINER_CLOSE: ClientboundPackets1_9;
    static CONTAINER_SET_CONTENT: ClientboundPackets1_9;
    static CONTAINER_SET_DATA: ClientboundPackets1_9;
    static CONTAINER_SET_SLOT: ClientboundPackets1_9;
    static COOLDOWN: ClientboundPackets1_9;
    static CUSTOM_PAYLOAD: ClientboundPackets1_9;
    static CUSTOM_SOUND: ClientboundPackets1_9;
    static DISCONNECT: ClientboundPackets1_9;
    static ENTITY_EVENT: ClientboundPackets1_9;
    static EXPLODE: ClientboundPackets1_9;
    static FORGET_LEVEL_CHUNK: ClientboundPackets1_9;
    static GAME_EVENT: ClientboundPackets1_9;
    static KEEP_ALIVE: ClientboundPackets1_9;
    static LEVEL_CHUNK: ClientboundPackets1_9;
    static LEVEL_EVENT: ClientboundPackets1_9;
    static LEVEL_PARTICLES: ClientboundPackets1_9;
    static LOGIN: ClientboundPackets1_9;
    static MAP_ITEM_DATA: ClientboundPackets1_9;
    static MOVE_ENTITY: ClientboundPackets1_9;
    static MOVE_ENTITY_POS: ClientboundPackets1_9;
    static MOVE_ENTITY_POS_ROT: ClientboundPackets1_9;
    static MOVE_ENTITY_ROT: ClientboundPackets1_9;
    static MOVE_VEHICLE: ClientboundPackets1_9;
    static OPEN_SCREEN: ClientboundPackets1_9;
    static OPEN_SIGN_EDITOR: ClientboundPackets1_9;
    static PLAYER_ABILITIES: ClientboundPackets1_9;
    static PLAYER_COMBAT: ClientboundPackets1_9;
    static PLAYER_INFO: ClientboundPackets1_9;
    static PLAYER_POSITION: ClientboundPackets1_9;
    static PLAYER_SLEEP: ClientboundPackets1_9;
    static REMOVE_ENTITIES: ClientboundPackets1_9;
    static REMOVE_MOB_EFFECT: ClientboundPackets1_9;
    static RESOURCE_PACK: ClientboundPackets1_9;
    static RESPAWN: ClientboundPackets1_9;
    static ROTATE_HEAD: ClientboundPackets1_9;
    static SET_BORDER: ClientboundPackets1_9;
    static SET_CAMERA: ClientboundPackets1_9;
    static SET_CARRIED_ITEM: ClientboundPackets1_9;
    static SET_DEFAULT_SPAWN_POSITION: ClientboundPackets1_9;
    static SET_DISPLAY_OBJECTIVE: ClientboundPackets1_9;
    static SET_ENTITY_DATA: ClientboundPackets1_9;
    static SET_ENTITY_LINK: ClientboundPackets1_9;
    static SET_ENTITY_MOTION: ClientboundPackets1_9;
    static SET_EQUIPPED_ITEM: ClientboundPackets1_9;
    static SET_EXPERIENCE: ClientboundPackets1_9;
    static SET_HEALTH: ClientboundPackets1_9;
    static SET_OBJECTIVE: ClientboundPackets1_9;
    static SET_PASSENGERS: ClientboundPackets1_9;
    static SET_PLAYER_TEAM: ClientboundPackets1_9;
    static SET_SCORE: ClientboundPackets1_9;
    static SET_TIME: ClientboundPackets1_9;
    static SET_TITLES: ClientboundPackets1_9;
    static SOUND: ClientboundPackets1_9;
    static TAB_LIST: ClientboundPackets1_9;
    static TAKE_ITEM_ENTITY: ClientboundPackets1_9;
    static TELEPORT_ENTITY: ClientboundPackets1_9;
    static UPDATE_ATTRIBUTES: ClientboundPackets1_9;
    static UPDATE_MOB_EFFECT: ClientboundPackets1_9;
    static UPDATE_SIGN: ClientboundPackets1_9;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundPackets1_9;
    static values(): ClientboundPackets1_9[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "ADD_ENTITY" | "ADD_EXPERIENCE_ORB" | "ADD_GLOBAL_ENTITY" | "ADD_MOB" | "ADD_PAINTING" | "ADD_PLAYER" | "ANIMATE" | "AWARD_STATS" | "BLOCK_DESTRUCTION" | "BLOCK_ENTITY_DATA" | "BLOCK_EVENT" | "BLOCK_UPDATE" | "BOSS_EVENT" | "CHANGE_DIFFICULTY" | "COMMAND_SUGGESTIONS" | "CHAT" | "CHUNK_BLOCKS_UPDATE" | "CONTAINER_ACK" | "CONTAINER_CLOSE" | "OPEN_SCREEN" | "CONTAINER_SET_CONTENT" | "CONTAINER_SET_DATA" | "CONTAINER_SET_SLOT" | "COOLDOWN" | "CUSTOM_PAYLOAD" | "CUSTOM_SOUND" | "DISCONNECT" | "ENTITY_EVENT" | "EXPLODE" | "FORGET_LEVEL_CHUNK" | "GAME_EVENT" | "KEEP_ALIVE" | "LEVEL_CHUNK" | "LEVEL_EVENT" | "LEVEL_PARTICLES" | "LOGIN" | "MAP_ITEM_DATA" | "MOVE_ENTITY_POS" | "MOVE_ENTITY_POS_ROT" | "MOVE_ENTITY_ROT" | "MOVE_ENTITY" | "MOVE_VEHICLE" | "OPEN_SIGN_EDITOR" | "PLAYER_ABILITIES" | "PLAYER_COMBAT" | "PLAYER_INFO" | "PLAYER_POSITION" | "PLAYER_SLEEP" | "REMOVE_ENTITIES" | "REMOVE_MOB_EFFECT" | "RESOURCE_PACK" | "RESPAWN" | "ROTATE_HEAD" | "SET_BORDER" | "SET_CAMERA" | "SET_CARRIED_ITEM" | "SET_DISPLAY_OBJECTIVE" | "SET_ENTITY_DATA" | "SET_ENTITY_LINK" | "SET_ENTITY_MOTION" | "SET_EQUIPPED_ITEM" | "SET_EXPERIENCE" | "SET_HEALTH" | "SET_OBJECTIVE" | "SET_PASSENGERS" | "SET_PLAYER_TEAM" | "SET_SCORE" | "SET_DEFAULT_SPAWN_POSITION" | "SET_TIME" | "SET_TITLES" | "UPDATE_SIGN" | "SOUND" | "TAB_LIST" | "TAKE_ITEM_ENTITY" | "TELEPORT_ENTITY" | "UPDATE_ATTRIBUTES" | "UPDATE_MOB_EFFECT";
}
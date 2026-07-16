import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ServerboundPacket1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ServerboundPacket1_21_5.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ServerboundPackets1_21_5 extends Enum<ServerboundPackets1_21_5> implements ServerboundPacket1_21_5 {
    static ACCEPT_TELEPORTATION: ServerboundPackets1_21_5;
    static BLOCK_ENTITY_TAG_QUERY: ServerboundPackets1_21_5;
    static BUNDLE_ITEM_SELECTED: ServerboundPackets1_21_5;
    static CHANGE_DIFFICULTY: ServerboundPackets1_21_5;
    static CHAT: ServerboundPackets1_21_5;
    static CHAT_ACK: ServerboundPackets1_21_5;
    static CHAT_COMMAND: ServerboundPackets1_21_5;
    static CHAT_COMMAND_SIGNED: ServerboundPackets1_21_5;
    static CHAT_SESSION_UPDATE: ServerboundPackets1_21_5;
    static CHUNK_BATCH_RECEIVED: ServerboundPackets1_21_5;
    static CLIENT_COMMAND: ServerboundPackets1_21_5;
    static CLIENT_INFORMATION: ServerboundPackets1_21_5;
    static CLIENT_TICK_END: ServerboundPackets1_21_5;
    static COMMAND_SUGGESTION: ServerboundPackets1_21_5;
    static CONFIGURATION_ACKNOWLEDGED: ServerboundPackets1_21_5;
    static CONTAINER_BUTTON_CLICK: ServerboundPackets1_21_5;
    static CONTAINER_CLICK: ServerboundPackets1_21_5;
    static CONTAINER_CLOSE: ServerboundPackets1_21_5;
    static CONTAINER_SLOT_STATE_CHANGED: ServerboundPackets1_21_5;
    static COOKIE_RESPONSE: ServerboundPackets1_21_5;
    static CUSTOM_PAYLOAD: ServerboundPackets1_21_5;
    static DEBUG_SAMPLE_SUBSCRIPTION: ServerboundPackets1_21_5;
    static EDIT_BOOK: ServerboundPackets1_21_5;
    static ENTITY_TAG_QUERY: ServerboundPackets1_21_5;
    static INTERACT: ServerboundPackets1_21_5;
    static JIGSAW_GENERATE: ServerboundPackets1_21_5;
    static KEEP_ALIVE: ServerboundPackets1_21_5;
    static LOCK_DIFFICULTY: ServerboundPackets1_21_5;
    static MOVE_PLAYER_POS: ServerboundPackets1_21_5;
    static MOVE_PLAYER_POS_ROT: ServerboundPackets1_21_5;
    static MOVE_PLAYER_ROT: ServerboundPackets1_21_5;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPackets1_21_5;
    static MOVE_VEHICLE: ServerboundPackets1_21_5;
    static PADDLE_BOAT: ServerboundPackets1_21_5;
    static PICK_ITEM_FROM_BLOCK: ServerboundPackets1_21_5;
    static PICK_ITEM_FROM_ENTITY: ServerboundPackets1_21_5;
    static PING_REQUEST: ServerboundPackets1_21_5;
    static PLACE_RECIPE: ServerboundPackets1_21_5;
    static PLAYER_ABILITIES: ServerboundPackets1_21_5;
    static PLAYER_ACTION: ServerboundPackets1_21_5;
    static PLAYER_COMMAND: ServerboundPackets1_21_5;
    static PLAYER_INPUT: ServerboundPackets1_21_5;
    static PLAYER_LOADED: ServerboundPackets1_21_5;
    static PONG: ServerboundPackets1_21_5;
    static RECIPE_BOOK_CHANGE_SETTINGS: ServerboundPackets1_21_5;
    static RECIPE_BOOK_SEEN_RECIPE: ServerboundPackets1_21_5;
    static RENAME_ITEM: ServerboundPackets1_21_5;
    static RESOURCE_PACK: ServerboundPackets1_21_5;
    static SEEN_ADVANCEMENTS: ServerboundPackets1_21_5;
    static SELECT_TRADE: ServerboundPackets1_21_5;
    static SET_BEACON: ServerboundPackets1_21_5;
    static SET_CARRIED_ITEM: ServerboundPackets1_21_5;
    static SET_COMMAND_BLOCK: ServerboundPackets1_21_5;
    static SET_COMMAND_MINECART: ServerboundPackets1_21_5;
    static SET_CREATIVE_MODE_SLOT: ServerboundPackets1_21_5;
    static SET_JIGSAW_BLOCK: ServerboundPackets1_21_5;
    static SET_STRUCTURE_BLOCK: ServerboundPackets1_21_5;
    static SET_TEST_BLOCK: ServerboundPackets1_21_5;
    static SIGN_UPDATE: ServerboundPackets1_21_5;
    static SWING: ServerboundPackets1_21_5;
    static TELEPORT_TO_ENTITY: ServerboundPackets1_21_5;
    static TEST_INSTANCE_BLOCK_ACTION: ServerboundPackets1_21_5;
    static USE_ITEM: ServerboundPackets1_21_5;
    static USE_ITEM_ON: ServerboundPackets1_21_5;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPackets1_21_5;
    static values(): ServerboundPackets1_21_5[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "ACCEPT_TELEPORTATION" | "BLOCK_ENTITY_TAG_QUERY" | "BUNDLE_ITEM_SELECTED" | "CHANGE_DIFFICULTY" | "CHAT_ACK" | "CHAT_COMMAND" | "CHAT_COMMAND_SIGNED" | "CHAT" | "CHAT_SESSION_UPDATE" | "CHUNK_BATCH_RECEIVED" | "CLIENT_COMMAND" | "CLIENT_TICK_END" | "CLIENT_INFORMATION" | "COMMAND_SUGGESTION" | "CONFIGURATION_ACKNOWLEDGED" | "CONTAINER_BUTTON_CLICK" | "CONTAINER_CLICK" | "CONTAINER_CLOSE" | "CONTAINER_SLOT_STATE_CHANGED" | "COOKIE_RESPONSE" | "CUSTOM_PAYLOAD" | "DEBUG_SAMPLE_SUBSCRIPTION" | "EDIT_BOOK" | "ENTITY_TAG_QUERY" | "INTERACT" | "JIGSAW_GENERATE" | "KEEP_ALIVE" | "LOCK_DIFFICULTY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_POS_ROT" | "MOVE_PLAYER_ROT" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_VEHICLE" | "PADDLE_BOAT" | "PICK_ITEM_FROM_BLOCK" | "PICK_ITEM_FROM_ENTITY" | "PING_REQUEST" | "PLACE_RECIPE" | "PLAYER_ABILITIES" | "PLAYER_ACTION" | "PLAYER_COMMAND" | "PLAYER_INPUT" | "PLAYER_LOADED" | "PONG" | "RECIPE_BOOK_CHANGE_SETTINGS" | "RECIPE_BOOK_SEEN_RECIPE" | "RENAME_ITEM" | "RESOURCE_PACK" | "SEEN_ADVANCEMENTS" | "SELECT_TRADE" | "SET_BEACON" | "SET_CARRIED_ITEM" | "SET_COMMAND_BLOCK" | "SET_COMMAND_MINECART" | "SET_CREATIVE_MODE_SLOT" | "SET_JIGSAW_BLOCK" | "SET_STRUCTURE_BLOCK" | "SET_TEST_BLOCK" | "SIGN_UPDATE" | "SWING" | "TELEPORT_TO_ENTITY" | "TEST_INSTANCE_BLOCK_ACTION" | "USE_ITEM_ON" | "USE_ITEM";
}
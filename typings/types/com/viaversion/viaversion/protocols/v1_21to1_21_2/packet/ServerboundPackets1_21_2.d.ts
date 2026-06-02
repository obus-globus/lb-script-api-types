import type { ServerboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ServerboundPacket1_21_2.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ServerboundPackets1_21_2 extends Enum<ServerboundPackets1_21_2> implements ServerboundPacket1_21_2 {
    static ACCEPT_TELEPORTATION: ServerboundPackets1_21_2;
    static BLOCK_ENTITY_TAG_QUERY: ServerboundPackets1_21_2;
    static BUNDLE_ITEM_SELECTED: ServerboundPackets1_21_2;
    static CHANGE_DIFFICULTY: ServerboundPackets1_21_2;
    static CHAT: ServerboundPackets1_21_2;
    static CHAT_ACK: ServerboundPackets1_21_2;
    static CHAT_COMMAND: ServerboundPackets1_21_2;
    static CHAT_COMMAND_SIGNED: ServerboundPackets1_21_2;
    static CHAT_SESSION_UPDATE: ServerboundPackets1_21_2;
    static CHUNK_BATCH_RECEIVED: ServerboundPackets1_21_2;
    static CLIENT_COMMAND: ServerboundPackets1_21_2;
    static CLIENT_INFORMATION: ServerboundPackets1_21_2;
    static CLIENT_TICK_END: ServerboundPackets1_21_2;
    static COMMAND_SUGGESTION: ServerboundPackets1_21_2;
    static CONFIGURATION_ACKNOWLEDGED: ServerboundPackets1_21_2;
    static CONTAINER_BUTTON_CLICK: ServerboundPackets1_21_2;
    static CONTAINER_CLICK: ServerboundPackets1_21_2;
    static CONTAINER_CLOSE: ServerboundPackets1_21_2;
    static CONTAINER_SLOT_STATE_CHANGED: ServerboundPackets1_21_2;
    static COOKIE_RESPONSE: ServerboundPackets1_21_2;
    static CUSTOM_PAYLOAD: ServerboundPackets1_21_2;
    static DEBUG_SAMPLE_SUBSCRIPTION: ServerboundPackets1_21_2;
    static EDIT_BOOK: ServerboundPackets1_21_2;
    static ENTITY_TAG_QUERY: ServerboundPackets1_21_2;
    static INTERACT: ServerboundPackets1_21_2;
    static JIGSAW_GENERATE: ServerboundPackets1_21_2;
    static KEEP_ALIVE: ServerboundPackets1_21_2;
    static LOCK_DIFFICULTY: ServerboundPackets1_21_2;
    static MOVE_PLAYER_POS: ServerboundPackets1_21_2;
    static MOVE_PLAYER_POS_ROT: ServerboundPackets1_21_2;
    static MOVE_PLAYER_ROT: ServerboundPackets1_21_2;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPackets1_21_2;
    static MOVE_VEHICLE: ServerboundPackets1_21_2;
    static PADDLE_BOAT: ServerboundPackets1_21_2;
    static PICK_ITEM: ServerboundPackets1_21_2;
    static PING_REQUEST: ServerboundPackets1_21_2;
    static PLACE_RECIPE: ServerboundPackets1_21_2;
    static PLAYER_ABILITIES: ServerboundPackets1_21_2;
    static PLAYER_ACTION: ServerboundPackets1_21_2;
    static PLAYER_COMMAND: ServerboundPackets1_21_2;
    static PLAYER_INPUT: ServerboundPackets1_21_2;
    static PONG: ServerboundPackets1_21_2;
    static RECIPE_BOOK_CHANGE_SETTINGS: ServerboundPackets1_21_2;
    static RECIPE_BOOK_SEEN_RECIPE: ServerboundPackets1_21_2;
    static RENAME_ITEM: ServerboundPackets1_21_2;
    static RESOURCE_PACK: ServerboundPackets1_21_2;
    static SEEN_ADVANCEMENTS: ServerboundPackets1_21_2;
    static SELECT_TRADE: ServerboundPackets1_21_2;
    static SET_BEACON: ServerboundPackets1_21_2;
    static SET_CARRIED_ITEM: ServerboundPackets1_21_2;
    static SET_COMMAND_BLOCK: ServerboundPackets1_21_2;
    static SET_COMMAND_MINECART: ServerboundPackets1_21_2;
    static SET_CREATIVE_MODE_SLOT: ServerboundPackets1_21_2;
    static SET_JIGSAW_BLOCK: ServerboundPackets1_21_2;
    static SET_STRUCTURE_BLOCK: ServerboundPackets1_21_2;
    static SIGN_UPDATE: ServerboundPackets1_21_2;
    static SWING: ServerboundPackets1_21_2;
    static TELEPORT_TO_ENTITY: ServerboundPackets1_21_2;
    static USE_ITEM: ServerboundPackets1_21_2;
    static USE_ITEM_ON: ServerboundPackets1_21_2;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPackets1_21_2;
    static values(): (Object | null)[];
    private constructor()
    getId(): number;
    getName(): string;
    name(): "ACCEPT_TELEPORTATION" | "BLOCK_ENTITY_TAG_QUERY" | "BUNDLE_ITEM_SELECTED" | "CHANGE_DIFFICULTY" | "CHAT_ACK" | "CHAT_COMMAND" | "CHAT_COMMAND_SIGNED" | "CHAT" | "CHAT_SESSION_UPDATE" | "CHUNK_BATCH_RECEIVED" | "CLIENT_COMMAND" | "CLIENT_TICK_END" | "CLIENT_INFORMATION" | "COMMAND_SUGGESTION" | "CONFIGURATION_ACKNOWLEDGED" | "CONTAINER_BUTTON_CLICK" | "CONTAINER_CLICK" | "CONTAINER_CLOSE" | "CONTAINER_SLOT_STATE_CHANGED" | "COOKIE_RESPONSE" | "CUSTOM_PAYLOAD" | "DEBUG_SAMPLE_SUBSCRIPTION" | "EDIT_BOOK" | "ENTITY_TAG_QUERY" | "INTERACT" | "JIGSAW_GENERATE" | "KEEP_ALIVE" | "LOCK_DIFFICULTY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_POS_ROT" | "MOVE_PLAYER_ROT" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_VEHICLE" | "PADDLE_BOAT" | "PICK_ITEM" | "PING_REQUEST" | "PLACE_RECIPE" | "PLAYER_ABILITIES" | "PLAYER_ACTION" | "PLAYER_COMMAND" | "PLAYER_INPUT" | "PONG" | "RECIPE_BOOK_CHANGE_SETTINGS" | "RECIPE_BOOK_SEEN_RECIPE" | "RENAME_ITEM" | "RESOURCE_PACK" | "SEEN_ADVANCEMENTS" | "SELECT_TRADE" | "SET_BEACON" | "SET_CARRIED_ITEM" | "SET_COMMAND_BLOCK" | "SET_COMMAND_MINECART" | "SET_CREATIVE_MODE_SLOT" | "SET_JIGSAW_BLOCK" | "SET_STRUCTURE_BLOCK" | "SIGN_UPDATE" | "SWING" | "TELEPORT_TO_ENTITY" | "USE_ITEM_ON" | "USE_ITEM";
}
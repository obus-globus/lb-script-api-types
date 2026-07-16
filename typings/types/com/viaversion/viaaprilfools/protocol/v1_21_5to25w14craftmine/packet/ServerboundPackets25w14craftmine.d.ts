import type { ServerboundPacket25w14craftmine } from '../../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/packet/ServerboundPacket25w14craftmine.d.ts'
import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ServerboundPackets25w14craftmine extends Enum<ServerboundPackets25w14craftmine> implements ServerboundPacket25w14craftmine {
    static ACCEPT_TELEPORTATION: ServerboundPackets25w14craftmine;
    static BLOCK_ENTITY_TAG_QUERY: ServerboundPackets25w14craftmine;
    static BUNDLE_ITEM_SELECTED: ServerboundPackets25w14craftmine;
    static CHANGE_DIFFICULTY: ServerboundPackets25w14craftmine;
    static CHAT: ServerboundPackets25w14craftmine;
    static CHAT_ACK: ServerboundPackets25w14craftmine;
    static CHAT_COMMAND: ServerboundPackets25w14craftmine;
    static CHAT_COMMAND_SIGNED: ServerboundPackets25w14craftmine;
    static CHAT_SESSION_UPDATE: ServerboundPackets25w14craftmine;
    static CHUNK_BATCH_RECEIVED: ServerboundPackets25w14craftmine;
    static CLIENT_COMMAND: ServerboundPackets25w14craftmine;
    static CLIENT_INFORMATION: ServerboundPackets25w14craftmine;
    static CLIENT_TICK_END: ServerboundPackets25w14craftmine;
    static COMMAND_SUGGESTION: ServerboundPackets25w14craftmine;
    static CONFIGURATION_ACKNOWLEDGED: ServerboundPackets25w14craftmine;
    static CONTAINER_BUTTON_CLICK: ServerboundPackets25w14craftmine;
    static CONTAINER_CLICK: ServerboundPackets25w14craftmine;
    static CONTAINER_CLOSE: ServerboundPackets25w14craftmine;
    static CONTAINER_SLOT_STATE_CHANGED: ServerboundPackets25w14craftmine;
    static COOKIE_RESPONSE: ServerboundPackets25w14craftmine;
    static CUSTOM_PAYLOAD: ServerboundPackets25w14craftmine;
    static DEBUG_SAMPLE_SUBSCRIPTION: ServerboundPackets25w14craftmine;
    static EDIT_BOOK: ServerboundPackets25w14craftmine;
    static ENTITY_TAG_QUERY: ServerboundPackets25w14craftmine;
    static INTERACT: ServerboundPackets25w14craftmine;
    static JIGSAW_GENERATE: ServerboundPackets25w14craftmine;
    static KEEP_ALIVE: ServerboundPackets25w14craftmine;
    static LOCK_DIFFICULTY: ServerboundPackets25w14craftmine;
    static MOVE_PLAYER_POS: ServerboundPackets25w14craftmine;
    static MOVE_PLAYER_POS_ROT: ServerboundPackets25w14craftmine;
    static MOVE_PLAYER_ROT: ServerboundPackets25w14craftmine;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPackets25w14craftmine;
    static MOVE_VEHICLE: ServerboundPackets25w14craftmine;
    static PADDLE_BOAT: ServerboundPackets25w14craftmine;
    static PICK_ITEM_FROM_BLOCK: ServerboundPackets25w14craftmine;
    static PICK_ITEM_FROM_ENTITY: ServerboundPackets25w14craftmine;
    static PING_REQUEST: ServerboundPackets25w14craftmine;
    static PLACE_RECIPE: ServerboundPackets25w14craftmine;
    static PLAYER_ABILITIES: ServerboundPackets25w14craftmine;
    static PLAYER_ACTION: ServerboundPackets25w14craftmine;
    static PLAYER_BUY_UNLOCK: ServerboundPackets25w14craftmine;
    static PLAYER_COMMAND: ServerboundPackets25w14craftmine;
    static PLAYER_DONATE_EXPERIENCE: ServerboundPackets25w14craftmine;
    static PLAYER_INPUT: ServerboundPackets25w14craftmine;
    static PLAYER_LOADED: ServerboundPackets25w14craftmine;
    static PLAYER_REACTIVATE_UNLOCK: ServerboundPackets25w14craftmine;
    static PONG: ServerboundPackets25w14craftmine;
    static RECIPE_BOOK_CHANGE_SETTINGS: ServerboundPackets25w14craftmine;
    static RECIPE_BOOK_SEEN_RECIPE: ServerboundPackets25w14craftmine;
    static RENAME_ITEM: ServerboundPackets25w14craftmine;
    static RESOURCE_PACK: ServerboundPackets25w14craftmine;
    static SEEN_ADVANCEMENTS: ServerboundPackets25w14craftmine;
    static SELECT_TRADE: ServerboundPackets25w14craftmine;
    static SET_BEACON: ServerboundPackets25w14craftmine;
    static SET_CARRIED_ITEM: ServerboundPackets25w14craftmine;
    static SET_COMMAND_BLOCK: ServerboundPackets25w14craftmine;
    static SET_COMMAND_MINECART: ServerboundPackets25w14craftmine;
    static SET_CREATIVE_MODE_SLOT: ServerboundPackets25w14craftmine;
    static SET_JIGSAW_BLOCK: ServerboundPackets25w14craftmine;
    static SET_STRUCTURE_BLOCK: ServerboundPackets25w14craftmine;
    static SET_TEST_BLOCK: ServerboundPackets25w14craftmine;
    static SIGN_UPDATE: ServerboundPackets25w14craftmine;
    static SWING: ServerboundPackets25w14craftmine;
    static TELEPORT_TO_ENTITY: ServerboundPackets25w14craftmine;
    static TEST_INSTANCE_BLOCK_ACTION: ServerboundPackets25w14craftmine;
    static USE_ITEM: ServerboundPackets25w14craftmine;
    static USE_ITEM_ON: ServerboundPackets25w14craftmine;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPackets25w14craftmine;
    static values(): ServerboundPackets25w14craftmine[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "ACCEPT_TELEPORTATION" | "BLOCK_ENTITY_TAG_QUERY" | "BUNDLE_ITEM_SELECTED" | "CHANGE_DIFFICULTY" | "CHAT_ACK" | "CHAT_COMMAND" | "CHAT_COMMAND_SIGNED" | "CHAT" | "CHAT_SESSION_UPDATE" | "CHUNK_BATCH_RECEIVED" | "CLIENT_COMMAND" | "CLIENT_TICK_END" | "PLAYER_DONATE_EXPERIENCE" | "CLIENT_INFORMATION" | "COMMAND_SUGGESTION" | "CONFIGURATION_ACKNOWLEDGED" | "CONTAINER_BUTTON_CLICK" | "CONTAINER_CLICK" | "CONTAINER_CLOSE" | "CONTAINER_SLOT_STATE_CHANGED" | "COOKIE_RESPONSE" | "CUSTOM_PAYLOAD" | "DEBUG_SAMPLE_SUBSCRIPTION" | "EDIT_BOOK" | "ENTITY_TAG_QUERY" | "INTERACT" | "JIGSAW_GENERATE" | "KEEP_ALIVE" | "LOCK_DIFFICULTY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_POS_ROT" | "MOVE_PLAYER_ROT" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_VEHICLE" | "PADDLE_BOAT" | "PICK_ITEM_FROM_BLOCK" | "PICK_ITEM_FROM_ENTITY" | "PING_REQUEST" | "PLACE_RECIPE" | "PLAYER_ABILITIES" | "PLAYER_ACTION" | "PLAYER_COMMAND" | "PLAYER_INPUT" | "PLAYER_LOADED" | "PLAYER_BUY_UNLOCK" | "PLAYER_REACTIVATE_UNLOCK" | "PONG" | "RECIPE_BOOK_CHANGE_SETTINGS" | "RECIPE_BOOK_SEEN_RECIPE" | "RENAME_ITEM" | "RESOURCE_PACK" | "SEEN_ADVANCEMENTS" | "SELECT_TRADE" | "SET_BEACON" | "SET_CARRIED_ITEM" | "SET_COMMAND_BLOCK" | "SET_COMMAND_MINECART" | "SET_CREATIVE_MODE_SLOT" | "SET_JIGSAW_BLOCK" | "SET_STRUCTURE_BLOCK" | "SET_TEST_BLOCK" | "SIGN_UPDATE" | "SWING" | "TELEPORT_TO_ENTITY" | "TEST_INSTANCE_BLOCK_ACTION" | "USE_ITEM_ON" | "USE_ITEM";
}
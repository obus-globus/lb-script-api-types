import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ServerboundPackets1_19 extends Enum<ServerboundPackets1_19> implements ServerboundPacketType {
    static ACCEPT_TELEPORTATION: ServerboundPackets1_19;
    static BLOCK_ENTITY_TAG_QUERY: ServerboundPackets1_19;
    static CHANGE_DIFFICULTY: ServerboundPackets1_19;
    static CHAT: ServerboundPackets1_19;
    static CHAT_COMMAND: ServerboundPackets1_19;
    static CHAT_PREVIEW: ServerboundPackets1_19;
    static CLIENT_COMMAND: ServerboundPackets1_19;
    static CLIENT_INFORMATION: ServerboundPackets1_19;
    static COMMAND_SUGGESTION: ServerboundPackets1_19;
    static CONTAINER_BUTTON_CLICK: ServerboundPackets1_19;
    static CONTAINER_CLICK: ServerboundPackets1_19;
    static CONTAINER_CLOSE: ServerboundPackets1_19;
    static CUSTOM_PAYLOAD: ServerboundPackets1_19;
    static EDIT_BOOK: ServerboundPackets1_19;
    static ENTITY_TAG_QUERY: ServerboundPackets1_19;
    static INTERACT: ServerboundPackets1_19;
    static JIGSAW_GENERATE: ServerboundPackets1_19;
    static KEEP_ALIVE: ServerboundPackets1_19;
    static LOCK_DIFFICULTY: ServerboundPackets1_19;
    static MOVE_PLAYER_POS: ServerboundPackets1_19;
    static MOVE_PLAYER_POS_ROT: ServerboundPackets1_19;
    static MOVE_PLAYER_ROT: ServerboundPackets1_19;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPackets1_19;
    static MOVE_VEHICLE: ServerboundPackets1_19;
    static PADDLE_BOAT: ServerboundPackets1_19;
    static PICK_ITEM: ServerboundPackets1_19;
    static PLACE_RECIPE: ServerboundPackets1_19;
    static PLAYER_ABILITIES: ServerboundPackets1_19;
    static PLAYER_ACTION: ServerboundPackets1_19;
    static PLAYER_COMMAND: ServerboundPackets1_19;
    static PLAYER_INPUT: ServerboundPackets1_19;
    static PONG: ServerboundPackets1_19;
    static RECIPE_BOOK_CHANGE_SETTINGS: ServerboundPackets1_19;
    static RECIPE_BOOK_SEEN_RECIPE: ServerboundPackets1_19;
    static RENAME_ITEM: ServerboundPackets1_19;
    static RESOURCE_PACK: ServerboundPackets1_19;
    static SEEN_ADVANCEMENTS: ServerboundPackets1_19;
    static SELECT_TRADE: ServerboundPackets1_19;
    static SET_BEACON: ServerboundPackets1_19;
    static SET_CARRIED_ITEM: ServerboundPackets1_19;
    static SET_COMMAND_BLOCK: ServerboundPackets1_19;
    static SET_COMMAND_MINECART: ServerboundPackets1_19;
    static SET_CREATIVE_MODE_SLOT: ServerboundPackets1_19;
    static SET_JIGSAW_BLOCK: ServerboundPackets1_19;
    static SET_STRUCTURE_BLOCK: ServerboundPackets1_19;
    static SIGN_UPDATE: ServerboundPackets1_19;
    static SWING: ServerboundPackets1_19;
    static TELEPORT_TO_ENTITY: ServerboundPackets1_19;
    static USE_ITEM: ServerboundPackets1_19;
    static USE_ITEM_ON: ServerboundPackets1_19;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ServerboundPackets1_19;
    static values(): ServerboundPackets1_19[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "ACCEPT_TELEPORTATION" | "BLOCK_ENTITY_TAG_QUERY" | "CHANGE_DIFFICULTY" | "CHAT_COMMAND" | "CHAT" | "CHAT_PREVIEW" | "CLIENT_COMMAND" | "CLIENT_INFORMATION" | "COMMAND_SUGGESTION" | "CONTAINER_BUTTON_CLICK" | "CONTAINER_CLICK" | "CONTAINER_CLOSE" | "CUSTOM_PAYLOAD" | "EDIT_BOOK" | "ENTITY_TAG_QUERY" | "INTERACT" | "JIGSAW_GENERATE" | "KEEP_ALIVE" | "LOCK_DIFFICULTY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_POS_ROT" | "MOVE_PLAYER_ROT" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_VEHICLE" | "PADDLE_BOAT" | "PICK_ITEM" | "PLACE_RECIPE" | "PLAYER_ABILITIES" | "PLAYER_ACTION" | "PLAYER_COMMAND" | "PLAYER_INPUT" | "PONG" | "RECIPE_BOOK_CHANGE_SETTINGS" | "RECIPE_BOOK_SEEN_RECIPE" | "RENAME_ITEM" | "RESOURCE_PACK" | "SEEN_ADVANCEMENTS" | "SELECT_TRADE" | "SET_BEACON" | "SET_CARRIED_ITEM" | "SET_COMMAND_BLOCK" | "SET_COMMAND_MINECART" | "SET_CREATIVE_MODE_SLOT" | "SET_JIGSAW_BLOCK" | "SET_STRUCTURE_BLOCK" | "SIGN_UPDATE" | "SWING" | "TELEPORT_TO_ENTITY" | "USE_ITEM_ON" | "USE_ITEM";
}
import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ServerboundPackets1_13 extends Enum<ServerboundPackets1_13> implements ServerboundPacketType {
    static ACCEPT_TELEPORTATION: ServerboundPackets1_13;
    static BLOCK_ENTITY_TAG_QUERY: ServerboundPackets1_13;
    static CHAT: ServerboundPackets1_13;
    static CLIENT_COMMAND: ServerboundPackets1_13;
    static CLIENT_INFORMATION: ServerboundPackets1_13;
    static COMMAND_SUGGESTION: ServerboundPackets1_13;
    static CONTAINER_ACK: ServerboundPackets1_13;
    static CONTAINER_BUTTON_CLICK: ServerboundPackets1_13;
    static CONTAINER_CLICK: ServerboundPackets1_13;
    static CONTAINER_CLOSE: ServerboundPackets1_13;
    static CUSTOM_PAYLOAD: ServerboundPackets1_13;
    static EDIT_BOOK: ServerboundPackets1_13;
    static ENTITY_TAG_QUERY: ServerboundPackets1_13;
    static INTERACT: ServerboundPackets1_13;
    static KEEP_ALIVE: ServerboundPackets1_13;
    static MOVE_PLAYER_POS: ServerboundPackets1_13;
    static MOVE_PLAYER_POS_ROT: ServerboundPackets1_13;
    static MOVE_PLAYER_ROT: ServerboundPackets1_13;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPackets1_13;
    static MOVE_VEHICLE: ServerboundPackets1_13;
    static PADDLE_BOAT: ServerboundPackets1_13;
    static PICK_ITEM: ServerboundPackets1_13;
    static PLACE_RECIPE: ServerboundPackets1_13;
    static PLAYER_ABILITIES: ServerboundPackets1_13;
    static PLAYER_ACTION: ServerboundPackets1_13;
    static PLAYER_COMMAND: ServerboundPackets1_13;
    static PLAYER_INPUT: ServerboundPackets1_13;
    static RECIPE_BOOK_UPDATE: ServerboundPackets1_13;
    static RENAME_ITEM: ServerboundPackets1_13;
    static RESOURCE_PACK: ServerboundPackets1_13;
    static SEEN_ADVANCEMENTS: ServerboundPackets1_13;
    static SELECT_TRADE: ServerboundPackets1_13;
    static SET_BEACON: ServerboundPackets1_13;
    static SET_CARRIED_ITEM: ServerboundPackets1_13;
    static SET_COMMAND_BLOCK: ServerboundPackets1_13;
    static SET_COMMAND_MINECART: ServerboundPackets1_13;
    static SET_CREATIVE_MODE_SLOT: ServerboundPackets1_13;
    static SET_STRUCTURE_BLOCK: ServerboundPackets1_13;
    static SIGN_UPDATE: ServerboundPackets1_13;
    static SWING: ServerboundPackets1_13;
    static TELEPORT_TO_ENTITY: ServerboundPackets1_13;
    static USE_ITEM: ServerboundPackets1_13;
    static USE_ITEM_ON: ServerboundPackets1_13;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPackets1_13;
    static values(): (Object | null)[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "ACCEPT_TELEPORTATION" | "BLOCK_ENTITY_TAG_QUERY" | "CHAT" | "CLIENT_COMMAND" | "CLIENT_INFORMATION" | "COMMAND_SUGGESTION" | "CONTAINER_ACK" | "CONTAINER_BUTTON_CLICK" | "CONTAINER_CLICK" | "CONTAINER_CLOSE" | "CUSTOM_PAYLOAD" | "EDIT_BOOK" | "ENTITY_TAG_QUERY" | "INTERACT" | "KEEP_ALIVE" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_POS_ROT" | "MOVE_PLAYER_ROT" | "MOVE_VEHICLE" | "PADDLE_BOAT" | "PICK_ITEM" | "PLACE_RECIPE" | "PLAYER_ABILITIES" | "PLAYER_ACTION" | "PLAYER_COMMAND" | "PLAYER_INPUT" | "RECIPE_BOOK_UPDATE" | "RENAME_ITEM" | "RESOURCE_PACK" | "SEEN_ADVANCEMENTS" | "SELECT_TRADE" | "SET_BEACON" | "SET_CARRIED_ITEM" | "SET_COMMAND_BLOCK" | "SET_COMMAND_MINECART" | "SET_CREATIVE_MODE_SLOT" | "SET_STRUCTURE_BLOCK" | "SIGN_UPDATE" | "SWING" | "TELEPORT_TO_ENTITY" | "USE_ITEM_ON" | "USE_ITEM";
}
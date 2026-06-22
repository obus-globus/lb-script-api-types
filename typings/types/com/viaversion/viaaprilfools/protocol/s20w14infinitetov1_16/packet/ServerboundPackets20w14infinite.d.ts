import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ServerboundPackets20w14infinite extends Enum<ServerboundPackets20w14infinite> implements ServerboundPacketType {
    static ACCEPT_TELEPORTATION: ServerboundPackets20w14infinite;
    static BLOCK_ENTITY_TAG_QUERY: ServerboundPackets20w14infinite;
    static CHANGE_DIFFICULTY: ServerboundPackets20w14infinite;
    static CHAT: ServerboundPackets20w14infinite;
    static CLIENT_COMMAND: ServerboundPackets20w14infinite;
    static CLIENT_INFORMATION: ServerboundPackets20w14infinite;
    static COMMAND_SUGGESTION: ServerboundPackets20w14infinite;
    static CONTAINER_ACK: ServerboundPackets20w14infinite;
    static CONTAINER_BUTTON_CLICK: ServerboundPackets20w14infinite;
    static CONTAINER_CLICK: ServerboundPackets20w14infinite;
    static CONTAINER_CLOSE: ServerboundPackets20w14infinite;
    static CUSTOM_PAYLOAD: ServerboundPackets20w14infinite;
    static EDIT_BOOK: ServerboundPackets20w14infinite;
    static ENTITY_TAG_QUERY: ServerboundPackets20w14infinite;
    static INTERACT: ServerboundPackets20w14infinite;
    static KEEP_ALIVE: ServerboundPackets20w14infinite;
    static LOCK_DIFFICULTY: ServerboundPackets20w14infinite;
    static MOVE_PLAYER_POS: ServerboundPackets20w14infinite;
    static MOVE_PLAYER_POS_ROT: ServerboundPackets20w14infinite;
    static MOVE_PLAYER_ROT: ServerboundPackets20w14infinite;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPackets20w14infinite;
    static MOVE_VEHICLE: ServerboundPackets20w14infinite;
    static PADDLE_BOAT: ServerboundPackets20w14infinite;
    static PICK_ITEM: ServerboundPackets20w14infinite;
    static PLACE_RECIPE: ServerboundPackets20w14infinite;
    static PLAYER_ABILITIES: ServerboundPackets20w14infinite;
    static PLAYER_ACTION: ServerboundPackets20w14infinite;
    static PLAYER_COMMAND: ServerboundPackets20w14infinite;
    static PLAYER_INPUT: ServerboundPackets20w14infinite;
    static RECIPE_BOOK_UPDATE: ServerboundPackets20w14infinite;
    static RENAME_ITEM: ServerboundPackets20w14infinite;
    static RESOURCE_PACK: ServerboundPackets20w14infinite;
    static SEEN_ADVANCEMENTS: ServerboundPackets20w14infinite;
    static SELECT_TRADE: ServerboundPackets20w14infinite;
    static SET_BEACON: ServerboundPackets20w14infinite;
    static SET_CARRIED_ITEM: ServerboundPackets20w14infinite;
    static SET_COMMAND_BLOCK: ServerboundPackets20w14infinite;
    static SET_COMMAND_MINECART: ServerboundPackets20w14infinite;
    static SET_CREATIVE_MODE_SLOT: ServerboundPackets20w14infinite;
    static SET_JIGSAW_BLOCK: ServerboundPackets20w14infinite;
    static SET_STRUCTURE_BLOCK: ServerboundPackets20w14infinite;
    static SIGN_UPDATE: ServerboundPackets20w14infinite;
    static SWING: ServerboundPackets20w14infinite;
    static TELEPORT_TO_ENTITY: ServerboundPackets20w14infinite;
    static USE_ITEM: ServerboundPackets20w14infinite;
    static USE_ITEM_ON: ServerboundPackets20w14infinite;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPackets20w14infinite;
    static values(): (Object | null)[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "ACCEPT_TELEPORTATION" | "BLOCK_ENTITY_TAG_QUERY" | "CHANGE_DIFFICULTY" | "CHAT" | "CLIENT_COMMAND" | "CLIENT_INFORMATION" | "COMMAND_SUGGESTION" | "CONTAINER_ACK" | "CONTAINER_BUTTON_CLICK" | "CONTAINER_CLICK" | "CONTAINER_CLOSE" | "CUSTOM_PAYLOAD" | "EDIT_BOOK" | "ENTITY_TAG_QUERY" | "INTERACT" | "KEEP_ALIVE" | "LOCK_DIFFICULTY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_POS_ROT" | "MOVE_PLAYER_ROT" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_VEHICLE" | "PADDLE_BOAT" | "PICK_ITEM" | "PLACE_RECIPE" | "PLAYER_ABILITIES" | "PLAYER_ACTION" | "PLAYER_COMMAND" | "PLAYER_INPUT" | "RECIPE_BOOK_UPDATE" | "RENAME_ITEM" | "RESOURCE_PACK" | "SEEN_ADVANCEMENTS" | "SELECT_TRADE" | "SET_BEACON" | "SET_CARRIED_ITEM" | "SET_COMMAND_BLOCK" | "SET_COMMAND_MINECART" | "SET_CREATIVE_MODE_SLOT" | "SET_JIGSAW_BLOCK" | "SET_STRUCTURE_BLOCK" | "SIGN_UPDATE" | "SWING" | "TELEPORT_TO_ENTITY" | "USE_ITEM_ON" | "USE_ITEM";
}
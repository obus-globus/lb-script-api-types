import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ServerboundPackets3D_Shareware extends Enum<ServerboundPackets3D_Shareware> implements ServerboundPacketType {
    static ACCEPT_TELEPORTATION: ServerboundPackets3D_Shareware;
    static BLOCK_ENTITY_TAG_QUERY: ServerboundPackets3D_Shareware;
    static CHANGE_DIFFICULTY: ServerboundPackets3D_Shareware;
    static CHAT: ServerboundPackets3D_Shareware;
    static CLIENT_COMMAND: ServerboundPackets3D_Shareware;
    static CLIENT_INFORMATION: ServerboundPackets3D_Shareware;
    static COMMAND_SUGGESTION: ServerboundPackets3D_Shareware;
    static CONTAINER_ACK: ServerboundPackets3D_Shareware;
    static CONTAINER_BUTTON_CLICK: ServerboundPackets3D_Shareware;
    static CONTAINER_CLICK: ServerboundPackets3D_Shareware;
    static CONTAINER_CLOSE: ServerboundPackets3D_Shareware;
    static CUSTOM_PAYLOAD: ServerboundPackets3D_Shareware;
    static EDIT_BOOK: ServerboundPackets3D_Shareware;
    static ENTITY_TAG_QUERY: ServerboundPackets3D_Shareware;
    static INTERACT: ServerboundPackets3D_Shareware;
    static KEEP_ALIVE: ServerboundPackets3D_Shareware;
    static LOCK_DIFFICULTY: ServerboundPackets3D_Shareware;
    static MOVE_PLAYER_POS: ServerboundPackets3D_Shareware;
    static MOVE_PLAYER_POS_ROT: ServerboundPackets3D_Shareware;
    static MOVE_PLAYER_ROT: ServerboundPackets3D_Shareware;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPackets3D_Shareware;
    static MOVE_VEHICLE: ServerboundPackets3D_Shareware;
    static PADDLE_BOAT: ServerboundPackets3D_Shareware;
    static PICK_ITEM: ServerboundPackets3D_Shareware;
    static PLACE_RECIPE: ServerboundPackets3D_Shareware;
    static PLAYER_ABILITIES: ServerboundPackets3D_Shareware;
    static PLAYER_ACTION: ServerboundPackets3D_Shareware;
    static PLAYER_COMMAND: ServerboundPackets3D_Shareware;
    static PLAYER_INPUT: ServerboundPackets3D_Shareware;
    static RECIPE_BOOK_UPDATE: ServerboundPackets3D_Shareware;
    static RENAME_ITEM: ServerboundPackets3D_Shareware;
    static RESOURCE_PACK: ServerboundPackets3D_Shareware;
    static SEEN_ADVANCEMENTS: ServerboundPackets3D_Shareware;
    static SELECT_TRADE: ServerboundPackets3D_Shareware;
    static SET_BEACON: ServerboundPackets3D_Shareware;
    static SET_CARRIED_ITEM: ServerboundPackets3D_Shareware;
    static SET_COMMAND_BLOCK: ServerboundPackets3D_Shareware;
    static SET_COMMAND_MINECART: ServerboundPackets3D_Shareware;
    static SET_CREATIVE_MODE_SLOT: ServerboundPackets3D_Shareware;
    static SET_JIGSAW_BLOCK: ServerboundPackets3D_Shareware;
    static SET_STRUCTURE_BLOCK: ServerboundPackets3D_Shareware;
    static SIGN_UPDATE: ServerboundPackets3D_Shareware;
    static SWING: ServerboundPackets3D_Shareware;
    static TELEPORT_TO_ENTITY: ServerboundPackets3D_Shareware;
    static USE_ITEM: ServerboundPackets3D_Shareware;
    static USE_ITEM_ON: ServerboundPackets3D_Shareware;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPackets3D_Shareware;
    static values(): ServerboundPackets3D_Shareware[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "ACCEPT_TELEPORTATION" | "BLOCK_ENTITY_TAG_QUERY" | "CHANGE_DIFFICULTY" | "CHAT" | "CLIENT_COMMAND" | "CLIENT_INFORMATION" | "COMMAND_SUGGESTION" | "CONTAINER_ACK" | "CONTAINER_BUTTON_CLICK" | "CONTAINER_CLICK" | "CONTAINER_CLOSE" | "CUSTOM_PAYLOAD" | "EDIT_BOOK" | "ENTITY_TAG_QUERY" | "INTERACT" | "LOCK_DIFFICULTY" | "KEEP_ALIVE" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_POS_ROT" | "MOVE_PLAYER_ROT" | "MOVE_VEHICLE" | "PADDLE_BOAT" | "PICK_ITEM" | "PLACE_RECIPE" | "PLAYER_ABILITIES" | "PLAYER_ACTION" | "PLAYER_COMMAND" | "PLAYER_INPUT" | "RECIPE_BOOK_UPDATE" | "RENAME_ITEM" | "RESOURCE_PACK" | "SEEN_ADVANCEMENTS" | "SELECT_TRADE" | "SET_BEACON" | "SET_CARRIED_ITEM" | "SET_COMMAND_BLOCK" | "SET_COMMAND_MINECART" | "SET_CREATIVE_MODE_SLOT" | "SET_JIGSAW_BLOCK" | "SET_STRUCTURE_BLOCK" | "SIGN_UPDATE" | "SWING" | "TELEPORT_TO_ENTITY" | "USE_ITEM_ON" | "USE_ITEM";
}
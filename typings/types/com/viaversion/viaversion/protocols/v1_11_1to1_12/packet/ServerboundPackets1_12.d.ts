import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ServerboundPackets1_12 extends Enum<ServerboundPackets1_12> implements ServerboundPacketType {
    static ACCEPT_TELEPORTATION: ServerboundPackets1_12;
    static CHAT: ServerboundPackets1_12;
    static CLIENT_COMMAND: ServerboundPackets1_12;
    static CLIENT_INFORMATION: ServerboundPackets1_12;
    static COMMAND_SUGGESTION: ServerboundPackets1_12;
    static CONTAINER_ACK: ServerboundPackets1_12;
    static CONTAINER_BUTTON_CLICK: ServerboundPackets1_12;
    static CONTAINER_CLICK: ServerboundPackets1_12;
    static CONTAINER_CLOSE: ServerboundPackets1_12;
    static CRAFTING_RECIPE_PLACEMENT: ServerboundPackets1_12;
    static CUSTOM_PAYLOAD: ServerboundPackets1_12;
    static INTERACT: ServerboundPackets1_12;
    static KEEP_ALIVE: ServerboundPackets1_12;
    static MOVE_PLAYER_POS: ServerboundPackets1_12;
    static MOVE_PLAYER_POS_ROT: ServerboundPackets1_12;
    static MOVE_PLAYER_ROT: ServerboundPackets1_12;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPackets1_12;
    static MOVE_VEHICLE: ServerboundPackets1_12;
    static PADDLE_BOAT: ServerboundPackets1_12;
    static PLAYER_ABILITIES: ServerboundPackets1_12;
    static PLAYER_ACTION: ServerboundPackets1_12;
    static PLAYER_COMMAND: ServerboundPackets1_12;
    static PLAYER_INPUT: ServerboundPackets1_12;
    static RECIPE_BOOK_UPDATE: ServerboundPackets1_12;
    static RESOURCE_PACK: ServerboundPackets1_12;
    static SEEN_ADVANCEMENTS: ServerboundPackets1_12;
    static SET_CARRIED_ITEM: ServerboundPackets1_12;
    static SET_CREATIVE_MODE_SLOT: ServerboundPackets1_12;
    static SIGN_UPDATE: ServerboundPackets1_12;
    static SWING: ServerboundPackets1_12;
    static TELEPORT_TO_ENTITY: ServerboundPackets1_12;
    static USE_ITEM: ServerboundPackets1_12;
    static USE_ITEM_ON: ServerboundPackets1_12;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPackets1_12;
    static values(): (Object | null)[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "ACCEPT_TELEPORTATION" | "CRAFTING_RECIPE_PLACEMENT" | "COMMAND_SUGGESTION" | "CHAT" | "CLIENT_COMMAND" | "CLIENT_INFORMATION" | "CONTAINER_ACK" | "CONTAINER_BUTTON_CLICK" | "CONTAINER_CLICK" | "CONTAINER_CLOSE" | "CUSTOM_PAYLOAD" | "INTERACT" | "KEEP_ALIVE" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_POS_ROT" | "MOVE_PLAYER_ROT" | "MOVE_VEHICLE" | "PADDLE_BOAT" | "PLAYER_ABILITIES" | "PLAYER_ACTION" | "PLAYER_COMMAND" | "PLAYER_INPUT" | "RECIPE_BOOK_UPDATE" | "RESOURCE_PACK" | "SEEN_ADVANCEMENTS" | "SET_CARRIED_ITEM" | "SET_CREATIVE_MODE_SLOT" | "SIGN_UPDATE" | "SWING" | "TELEPORT_TO_ENTITY" | "USE_ITEM_ON" | "USE_ITEM";
}
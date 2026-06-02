import type { Direction } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ServerboundPackets1_7_2 extends Enum<ServerboundPackets1_7_2> implements ServerboundPacketType {
    static CHAT: ServerboundPackets1_7_2;
    static CLIENT_COMMAND: ServerboundPackets1_7_2;
    static CLIENT_INFORMATION: ServerboundPackets1_7_2;
    static COMMAND_SUGGESTION: ServerboundPackets1_7_2;
    static CONTAINER_ACK: ServerboundPackets1_7_2;
    static CONTAINER_BUTTON_CLICK: ServerboundPackets1_7_2;
    static CONTAINER_CLICK: ServerboundPackets1_7_2;
    static CONTAINER_CLOSE: ServerboundPackets1_7_2;
    static CUSTOM_PAYLOAD: ServerboundPackets1_7_2;
    static INTERACT: ServerboundPackets1_7_2;
    static KEEP_ALIVE: ServerboundPackets1_7_2;
    static MOVE_PLAYER_POS: ServerboundPackets1_7_2;
    static MOVE_PLAYER_POS_ROT: ServerboundPackets1_7_2;
    static MOVE_PLAYER_ROT: ServerboundPackets1_7_2;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPackets1_7_2;
    static PLAYER_ABILITIES: ServerboundPackets1_7_2;
    static PLAYER_ACTION: ServerboundPackets1_7_2;
    static PLAYER_COMMAND: ServerboundPackets1_7_2;
    static PLAYER_INPUT: ServerboundPackets1_7_2;
    static SET_CARRIED_ITEM: ServerboundPackets1_7_2;
    static SET_CREATIVE_MODE_SLOT: ServerboundPackets1_7_2;
    static SIGN_UPDATE: ServerboundPackets1_7_2;
    static SWING: ServerboundPackets1_7_2;
    static USE_ITEM_ON: ServerboundPackets1_7_2;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundPackets1_7_2;
    static values(): (Object | null)[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    name(): "KEEP_ALIVE" | "CHAT" | "INTERACT" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_ROT" | "MOVE_PLAYER_POS_ROT" | "PLAYER_ACTION" | "USE_ITEM_ON" | "SET_CARRIED_ITEM" | "SWING" | "PLAYER_COMMAND" | "PLAYER_INPUT" | "CONTAINER_CLOSE" | "CONTAINER_CLICK" | "CONTAINER_ACK" | "SET_CREATIVE_MODE_SLOT" | "CONTAINER_BUTTON_CLICK" | "SIGN_UPDATE" | "PLAYER_ABILITIES" | "COMMAND_SUGGESTION" | "CLIENT_INFORMATION" | "CLIENT_COMMAND" | "CUSTOM_PAYLOAD";
}
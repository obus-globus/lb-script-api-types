import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ServerboundPackets1_9_3 extends Enum<ServerboundPackets1_9_3> implements ServerboundPacketType {
    static ACCEPT_TELEPORTATION: ServerboundPackets1_9_3;
    static CHAT: ServerboundPackets1_9_3;
    static CLIENT_COMMAND: ServerboundPackets1_9_3;
    static CLIENT_INFORMATION: ServerboundPackets1_9_3;
    static COMMAND_SUGGESTION: ServerboundPackets1_9_3;
    static CONTAINER_ACK: ServerboundPackets1_9_3;
    static CONTAINER_BUTTON_CLICK: ServerboundPackets1_9_3;
    static CONTAINER_CLICK: ServerboundPackets1_9_3;
    static CONTAINER_CLOSE: ServerboundPackets1_9_3;
    static CUSTOM_PAYLOAD: ServerboundPackets1_9_3;
    static INTERACT: ServerboundPackets1_9_3;
    static KEEP_ALIVE: ServerboundPackets1_9_3;
    static MOVE_PLAYER_POS: ServerboundPackets1_9_3;
    static MOVE_PLAYER_POS_ROT: ServerboundPackets1_9_3;
    static MOVE_PLAYER_ROT: ServerboundPackets1_9_3;
    static MOVE_PLAYER_STATUS_ONLY: ServerboundPackets1_9_3;
    static MOVE_VEHICLE: ServerboundPackets1_9_3;
    static PADDLE_BOAT: ServerboundPackets1_9_3;
    static PLAYER_ABILITIES: ServerboundPackets1_9_3;
    static PLAYER_ACTION: ServerboundPackets1_9_3;
    static PLAYER_COMMAND: ServerboundPackets1_9_3;
    static PLAYER_INPUT: ServerboundPackets1_9_3;
    static RESOURCE_PACK: ServerboundPackets1_9_3;
    static SET_CARRIED_ITEM: ServerboundPackets1_9_3;
    static SET_CREATIVE_MODE_SLOT: ServerboundPackets1_9_3;
    static SIGN_UPDATE: ServerboundPackets1_9_3;
    static SWING: ServerboundPackets1_9_3;
    static TELEPORT_TO_ENTITY: ServerboundPackets1_9_3;
    static USE_ITEM: ServerboundPackets1_9_3;
    static USE_ITEM_ON: ServerboundPackets1_9_3;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ServerboundPackets1_9_3;
    static values(): ServerboundPackets1_9_3[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "ACCEPT_TELEPORTATION" | "COMMAND_SUGGESTION" | "CHAT" | "CLIENT_COMMAND" | "CLIENT_INFORMATION" | "CONTAINER_ACK" | "CONTAINER_BUTTON_CLICK" | "CONTAINER_CLICK" | "CONTAINER_CLOSE" | "CUSTOM_PAYLOAD" | "INTERACT" | "KEEP_ALIVE" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_POS_ROT" | "MOVE_PLAYER_ROT" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_VEHICLE" | "PADDLE_BOAT" | "PLAYER_ABILITIES" | "PLAYER_ACTION" | "PLAYER_COMMAND" | "PLAYER_INPUT" | "RESOURCE_PACK" | "SET_CARRIED_ITEM" | "SET_CREATIVE_MODE_SLOT" | "SIGN_UPDATE" | "SWING" | "TELEPORT_TO_ENTITY" | "USE_ITEM_ON" | "USE_ITEM";
}
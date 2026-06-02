import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { PreNettyPacketType } from '../../../../../../../net/raphimc/vialegacy/api/splitter/PreNettyPacketType.d.ts'
export class ClientboundPacketsa1_0_15 extends Enum<ClientboundPacketsa1_0_15> implements ClientboundPacketType, PreNettyPacketType {
    static ADD_ENTITY: ClientboundPacketsa1_0_15;
    static ADD_PLAYER: ClientboundPacketsa1_0_15;
    static ADD_TO_INVENTORY: ClientboundPacketsa1_0_15;
    static ANIMATE: ClientboundPacketsa1_0_15;
    static BLOCK_UPDATE: ClientboundPacketsa1_0_15;
    static CHAT: ClientboundPacketsa1_0_15;
    static CHUNK_BLOCKS_UPDATE: ClientboundPacketsa1_0_15;
    static DISCONNECT: ClientboundPacketsa1_0_15;
    static KEEP_ALIVE: ClientboundPacketsa1_0_15;
    static LEVEL_CHUNK: ClientboundPacketsa1_0_15;
    static LOGIN: ClientboundPacketsa1_0_15;
    static MOVE_ENTITY: ClientboundPacketsa1_0_15;
    static MOVE_ENTITY_POS: ClientboundPacketsa1_0_15;
    static MOVE_ENTITY_POS_ROT: ClientboundPacketsa1_0_15;
    static MOVE_ENTITY_ROT: ClientboundPacketsa1_0_15;
    static MOVE_PLAYER_POS: ClientboundPacketsa1_0_15;
    static MOVE_PLAYER_ROT: ClientboundPacketsa1_0_15;
    static MOVE_PLAYER_STATUS_ONLY: ClientboundPacketsa1_0_15;
    static PLAYER_POSITION: ClientboundPacketsa1_0_15;
    static PRE_CHUNK: ClientboundPacketsa1_0_15;
    static REMOVE_ENTITIES: ClientboundPacketsa1_0_15;
    static SET_CARRIED_ITEM: ClientboundPacketsa1_0_15;
    static SPAWN_ITEM: ClientboundPacketsa1_0_15;
    static TAKE_ITEM_ENTITY: ClientboundPacketsa1_0_15;
    static TELEPORT_ENTITY: ClientboundPacketsa1_0_15;
    static getPacket(paramarg0: number): ClientboundPacketsa1_0_15;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundPacketsa1_0_15;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: (param0: UserConnection, param1: ByteBuf) => void)
    readonly id: number;
    readonly packetReader: (param0: UserConnection, param1: ByteBuf) => void;
    direction(): Direction;
    getId(): number;
    getName(): string;
    getPacketReader(): (param0: UserConnection, param1: ByteBuf) => void;
    name(): "KEEP_ALIVE" | "LOGIN" | "CHAT" | "MOVE_PLAYER_STATUS_ONLY" | "MOVE_PLAYER_POS" | "MOVE_PLAYER_ROT" | "PLAYER_POSITION" | "SET_CARRIED_ITEM" | "ADD_TO_INVENTORY" | "ANIMATE" | "ADD_PLAYER" | "SPAWN_ITEM" | "TAKE_ITEM_ENTITY" | "ADD_ENTITY" | "REMOVE_ENTITIES" | "MOVE_ENTITY" | "MOVE_ENTITY_POS" | "MOVE_ENTITY_ROT" | "MOVE_ENTITY_POS_ROT" | "TELEPORT_ENTITY" | "PRE_CHUNK" | "LEVEL_CHUNK" | "CHUNK_BLOCKS_UPDATE" | "BLOCK_UPDATE" | "DISCONNECT";
}
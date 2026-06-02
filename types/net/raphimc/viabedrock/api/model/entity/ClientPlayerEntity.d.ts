import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { AtomicInteger } from '../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { ClientPlayerEntity$AuthInputBlockAction } from '../../../../../../net/raphimc/viabedrock/api/model/entity/ClientPlayerEntity$AuthInputBlockAction.d.ts'
import type { ClientPlayerEntity$BlockBreakingInfo } from '../../../../../../net/raphimc/viabedrock/api/model/entity/ClientPlayerEntity$BlockBreakingInfo.d.ts'
import type { ClientPlayerEntity$DimensionChangeInfo } from '../../../../../../net/raphimc/viabedrock/api/model/entity/ClientPlayerEntity$DimensionChangeInfo.d.ts'
import type { PlayerEntity } from '../../../../../../net/raphimc/viabedrock/api/model/entity/PlayerEntity.d.ts'
import type { GameType } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/GameType.d.ts'
import type { PlayerActionType } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PlayerActionType.d.ts'
import type { PlayerAuthInputPacket_InputData } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PlayerAuthInputPacket_InputData.d.ts'
import type { InputFlag } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/java/InputFlag.d.ts'
import type { Relative } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/java/Relative.d.ts'
import type { GameMode } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/java/generated/GameMode.d.ts'
import type { EntityAttribute } from '../../../../../../net/raphimc/viabedrock/protocol/model/EntityAttribute.d.ts'
import type { PlayerAbilities } from '../../../../../../net/raphimc/viabedrock/protocol/model/PlayerAbilities.d.ts'
import type { Position3f } from '../../../../../../net/raphimc/viabedrock/protocol/model/Position3f.d.ts'
import type { GameSessionStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/GameSessionStorage.d.ts'
export class ClientPlayerEntity extends PlayerEntity {
    constructor(arg0: UserConnection, arg1: number, arg2: UUID, arg3: PlayerAbilities)
    // private TELEPORT_ID: AtomicInteger;
    // private authInputBlockActions: ClientPlayerEntity$AuthInputBlockAction[];
    // private authInputData: PlayerAuthInputPacket_InputData[];
    readonly blockBreakingInfo: ClientPlayerEntity$BlockBreakingInfo;
    // private cancelNextSwingPacket: boolean;
    readonly dimensionChangeInfo: ClientPlayerEntity$DimensionChangeInfo;
    // private gameSession: GameSessionStorage;
    readonly gameType: GameType;
    readonly horizontalCollision: boolean;
    readonly initiallySpawned: boolean;
    readonly inputFlags: InputFlag[];
    // private javaGameMode: GameMode;
    // private pendingTeleportId: number;
    // private prevInputFlags: InputFlag[];
    // private prevOnGround: boolean;
    // private prevPosition: Position3f;
    // private serverSideTeleportConfirmed: boolean;
    readonly sneaking: boolean;
    readonly sprinting: boolean;
    // private waitingForPositionSync: boolean;
    // private wasInsideUnloadedChunk: boolean;
    addAuthInputBlockAction(arg0: ClientPlayerEntity$AuthInputBlockAction): void;
    addAuthInputData(arg0: PlayerAuthInputPacket_InputData[]): void;
    addAuthInputData(arg0: PlayerAuthInputPacket_InputData): void;
    authInputBlockActions(): ClientPlayerEntity$AuthInputBlockAction[];
    authInputData(): PlayerAuthInputPacket_InputData[];
    blockBreakingInfo(): ClientPlayerEntity$BlockBreakingInfo;
    cancelNextSwingPacket(): void;
    checkCancelSwingPacket(): boolean;
    confirmTeleport(arg0: number): void;
    dimensionChangeInfo(): ClientPlayerEntity$DimensionChangeInfo;
    gameType(): GameType;
    horizontalCollision(): boolean;
    inputFlags(): InputFlag[];
    isInitiallySpawned(): boolean;
    isSneaking(): boolean;
    isSprinting(): boolean;
    javaGameMode(): GameMode;
    name(): string;
    // private preMove(arg0: Position3f, arg1: Position3f, arg2: boolean): boolean;
    prevInputFlags(): InputFlag[];
    prevOnGround(): boolean;
    prevPosition(): Position3f;
    sendPlayerActionPacketToServer(arg0: PlayerActionType): void;
    sendPlayerActionPacketToServer(arg0: PlayerActionType, arg1: BlockPosition, arg2: number): void;
    sendPlayerActionPacketToServer(arg0: PlayerActionType, arg1: number): void;
    sendPlayerPositionPacketToClient(arg0: Relative[]): void;
    sendSwingPacketToServer(): void;
    setAbilities(arg0: PlayerAbilities): void;
    setAbilities(arg0: PlayerAbilities, arg1: PacketWrapper): void;
    setBlockBreakingInfo(arg0: ClientPlayerEntity$BlockBreakingInfo): void;
    setDimensionChangeInfo(arg0: ClientPlayerEntity$DimensionChangeInfo): void;
    setGameType(arg0: GameType): void;
    setHorizontalCollision(arg0: boolean): void;
    setInitiallySpawned(): void;
    setInputFlags(arg0: InputFlag[]): void;
    setOnGround(arg0: boolean): void;
    setPosition(arg0: Position3f): void;
    setSneaking(arg0: boolean): void;
    setSprinting(arg0: boolean): void;
    tick(): void;
    translateAttribute(arg0: EntityAttribute, arg1: PacketWrapper, arg2: AtomicInteger, arg3: EntityData[]): boolean;
    updateJavaGameMode(): void;
    updatePlayerPosition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    updatePlayerPosition(arg0: number, arg1: number, arg2: number, arg3: number): void;
    updatePlayerPosition(arg0: number, arg1: number, arg2: number): void;
    updatePlayerPosition(arg0: number): void;
    writePlayerPositionPacketToClient(arg0: PacketWrapper, arg1: Relative[], arg2: boolean): void;
}
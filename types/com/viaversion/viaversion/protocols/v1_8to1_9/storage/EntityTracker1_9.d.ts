import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BossBar } from '../../../../../../com/viaversion/viaversion/api/legacy/bossbar/BossBar.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { GameMode } from '../../../../../../com/viaversion/viaversion/api/minecraft/GameMode.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { EntityTrackerBase } from '../../../../../../com/viaversion/viaversion/data/entity/EntityTrackerBase.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EntityTracker1_9 extends EntityTrackerBase {
    static DRAGON_TRANSLATABLE: string;
    static WITHER_TRANSLATABLE: string;
    constructor(arg0: UserConnection)
    readonly autoTeam: boolean;
    readonly blockInteractions: BlockPosition[];
    readonly blocking: boolean;
    readonly bossBarMap: Int2ObjectMap<BossBar>;
    readonly currentTeam: string;
    readonly currentlyDigging: BlockPosition;
    readonly gameMode: GameMode;
    readonly heldItemSlot: number;
    readonly itemInSecondHand: Item;
    readonly knownHolograms: (Object | null)[];
    readonly teamExists: boolean;
    readonly uuidMap: Int2ObjectMap<UUID>;
    readonly validBlocking: (Object | null)[];
    readonly vehicleMap: Int2IntMap;
    addBlockInteraction(arg0: BlockPosition): void;
    getBlockInteractions(): BlockPosition[];
    getBossBarMap(): Int2ObjectMap<BossBar>;
    getCurrentTeam(): string;
    getCurrentlyDigging(): BlockPosition;
    getDataByIndex(arg0: EntityData[], arg1: number): EntityData;
    getEntityUUID(arg0: number): UUID;
    getGameMode(): GameMode;
    getItemInSecondHand(): Item;
    getKnownHolograms(): (Object | null)[];
    getProvidedEntityId(): number;
    getUuidMap(): Int2ObjectMap<UUID>;
    getValidBlocking(): (Object | null)[];
    getVehicleMap(): Int2IntMap;
    handleEntityData(arg0: number, arg1: EntityData[]): void;
    hasSwordInHand(): boolean;
    interactedBlockRecently(arg0: number, arg1: number, arg2: number): boolean;
    isAutoTeam(): boolean;
    isBlocking(): boolean;
    isTeamExists(): boolean;
    removeEntity(arg0: number): void;
    sendTeamPacket(arg0: boolean, arg1: boolean): void;
    setAutoTeam(arg0: boolean): void;
    setBlocking(arg0: boolean): void;
    setCurrentTeam(arg0: string): void;
    setCurrentlyDigging(arg0: BlockPosition): void;
    setGameMode(arg0: GameMode): void;
    setHeldItemSlot(arg0: number): void;
    setSecondHand(arg0: Item): void;
    setSecondHand(arg0: number, arg1: Item): void;
    syncShieldWithSword(): void;
}
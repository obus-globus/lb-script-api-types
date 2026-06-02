import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerBossEvent } from '../../../../../../net/minecraft/server/level/ServerBossEvent.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DamageSource } from '../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityReference } from '../../../../../../net/minecraft/world/entity/EntityReference.d.ts'
import type { EndCrystal } from '../../../../../../net/minecraft/world/entity/boss/enderdragon/EndCrystal.d.ts'
import type { EnderDragon } from '../../../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragon.d.ts'
import type { BlockPattern } from '../../../../../../net/minecraft/world/level/block/state/pattern/BlockPattern.d.ts'
import type { BlockPattern$BlockPatternMatch } from '../../../../../../net/minecraft/world/level/block/state/pattern/BlockPattern$BlockPatternMatch.d.ts'
import type { DragonRespawnStage } from '../../../../../../net/minecraft/world/level/dimension/end/DragonRespawnStage.d.ts'
import type { SavedData } from '../../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
export class EnderDragonFight extends SavedData {
    static ARENA_TICKET_LEVEL: number;
    static CODEC: Codec<EnderDragonFight>;
    static DRAGON_SPAWN_Y: number;
    static TIME_BETWEEN_PLAYER_SCANS: number;
    static TYPE: SavedDataType<EnderDragonFight>;
    static createDefault(): EnderDragonFight;
    constructor(needsStateScanning: boolean, dragonKilled: boolean, previouslyKilled: boolean, respawnStage: Optional<DragonRespawnStage>, respawnTime: number, dragonUUID: Optional<UUID>, exitPortalLocation: Optional<BlockPos>, gateways: number[], respawnCrystals: EntityReference<EndCrystal>[])
    // private aliveCrystals: number;
    // private dragonEvent: ServerBossEvent;
    readonly dragonKilled: boolean;
    // private dragonUUID: UUID;
    // private exitPortalLocation: BlockPos;
    // private exitPortalPattern: BlockPattern;
    // private gateways: number[];
    // private hasPreviouslyKilledDragon: boolean;
    // private level: ServerLevel;
    // private needsStateScanning: boolean;
    // private origin: BlockPos;
    // private respawnCrystals: EntityReference<EndCrystal>[];
    // private respawnStage: DragonRespawnStage;
    // private respawnTime: number;
    // private skipArenaLoadedCheck: boolean;
    // private ticksSinceCrystalsScanned: number;
    // private ticksSinceDragonSeen: number;
    // private ticksSinceLastPlayerScan: number;
    // private validPlayer: (param0: Entity) => kotlin.Boolean;
    // private abortRespawnSequence(): void;
    aliveCrystals(): number;
    // private createNewDragon(): EnderDragon;
    dragonUUID(): UUID;
    // private findExitPortal(): BlockPattern$BlockPatternMatch;
    // private findOrCreateDragon(): void;
    // private hasActiveExitPortal(): boolean;
    hasPreviouslyKilledDragon(): boolean;
    init(level: ServerLevel, seed: number, origin: BlockPos): void;
    // private isArenaLoaded(): boolean;
    onCrystalDestroyed(crystal: EndCrystal, source: DamageSource): void;
    removeAllGateways(): void;
    resetSpikeCrystals(): void;
    // private respawnDragon(crystals: EndCrystal[]): void;
    // private scanState(): void;
    setDragonKilled(dragon: EnderDragon): void;
    setRespawnStage(stage: DragonRespawnStage): void;
    skipArenaLoadedCheck(): void;
    // private spawnExitPortal(activated: boolean): void;
    // private spawnNewGateway(): void;
    // private spawnNewGateway(pos: BlockPos): void;
    tick(): void;
    tryRespawn(): void;
    // private updateCrystalCount(): void;
    updateDragon(dragon: EnderDragon): void;
    // private updatePlayers(): void;
}
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { OverlayRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerInteractedItemEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerInteractedItemEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleStrongholdFinder$PendingThrow } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleStrongholdFinder$PendingThrow.d.ts'
import type { ModuleStrongholdFinder$PortalBlockType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleStrongholdFinder$PortalBlockType.d.ts'
import type { EyeMeasurement } from '../../../../../../../net/ccbluex/liquidbounce/utils/world/stronghold/EyeMeasurement.d.ts'
import type { PosteriorSnapshot } from '../../../../../../../net/ccbluex/liquidbounce/utils/world/stronghold/PosteriorSnapshot.d.ts'
import type { StrongholdHypothesis } from '../../../../../../../net/ccbluex/liquidbounce/utils/world/stronghold/StrongholdHypothesis.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ClientboundAddEntityPacket } from '../../../../../../../net/minecraft/network/protocol/game/ClientboundAddEntityPacket.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * Stronghold finder module.
 *
 * Automatically tracks Eye of Ender throws and estimates the strongest stronghold chunk candidate
 * using a Bayesian posterior.
 *
 * {@link Article}(https://github.com/Ninjabrain1/Ninjabrain-Bot/blob/main/triangulation.pdf)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleStrongholdFinder.kt#L81 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleStrongholdFinder.kt:81}
 */
export class ModuleStrongholdFinder extends ClientModule {
    static INSTANCE: ModuleStrongholdFinder;
    // private announcePrediction: boolean;
    // private /*not mapped: */ getAnnouncePrediction(): boolean;
    // private cachedHypothesisCount: number;
    // private detectedPortalBlocks: Map<BlockPos, ModuleStrongholdFinder$PortalBlockType>;
    // private hypothesisCache: StrongholdHypothesis[];
    // private hypothesisCount: number;
    // private /*not mapped: */ getHypothesisCount(): number;
    // private interactedItemHandler: EventHook<PlayerInteractedItemEvent>;
    // private lastAnnouncedCandidate: ChunkPos | null;
    // private maxSampleAgeTicks: number;
    // private /*not mapped: */ getMaxSampleAgeTicks(): number;
    // private measurements: EyeMeasurement[];
    // private minEyeHorizontalSpeed: number;
    // private /*not mapped: */ getMinEyeHorizontalSpeed(): number;
    // private packetHandler: EventHook<PacketEvent>;
    // private pendingThrows: ModuleStrongholdFinder$PendingThrow[];
    // private posterior: PosteriorSnapshot | null;
    // private render3DHandler: EventHook<WorldRenderEvent>;
    // private renderBestChunk: boolean;
    // private /*not mapped: */ getRenderBestChunk(): boolean;
    // private renderOverlayHandler: EventHook<OverlayRenderEvent>;
    // private renderRays: boolean;
    // private /*not mapped: */ getRenderRays(): boolean;
    // private renderTopChunks: boolean;
    // private /*not mapped: */ getRenderTopChunks(): boolean;
    // private requireSameStrongholdAcrossThrows: boolean;
    // private /*not mapped: */ getRequireSameStrongholdAcrossThrows(): boolean;
    // private resetOnWorldChange: boolean;
    // private /*not mapped: */ getResetOnWorldChange(): boolean;
    // private sampleDelayTicks: number;
    // private /*not mapped: */ getSampleDelayTicks(): number;
    // private showTopCandidates: number;
    // private /*not mapped: */ getShowTopCandidates(): number;
    // private sigma: number;
    // private /*not mapped: */ getSigma(): number;
    // private tickHandler: EventHook<GameTickEvent>;
    // private trackedEyes: { [key: string]: any };
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private getOrCreateHypotheses(): StrongholdHypothesis[];
    // private handleEyeSpawnPacket(packet: ClientboundAddEntityPacket): void;
    // private isOverworld(): boolean;
    onDisabled(): void;
    // private onEstimatorSettingsChanged(): void;
    // private recomputePosterior(announce: boolean): void;
    // private removePortalBlocksInChunk(chunkPos: ChunkPos): void;
    // private resetState(): void;
    // private scanChunkForPortalBlocks(chunkX: number, chunkZ: number): void;
    // private trackPortalBlock(pos: BlockPos, block: Block): void;
    // private trimPendingThrows(nowTick: number): void;
}
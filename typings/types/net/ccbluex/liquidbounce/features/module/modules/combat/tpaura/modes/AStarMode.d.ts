import type { CoroutineContext } from '../../../../../../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { TpAuraMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/tpaura/TpAuraMode.d.ts'
import type { AStarMode$PathCache } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/tpaura/modes/AStarMode$PathCache.d.ts'
import type { AStarPathBuilder } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/AStarPathBuilder.d.ts'
import type { WeightedEdge } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/WeightedEdge.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Vec3i } from '../../../../../../../../../net/minecraft/core/Vec3i.d.ts'
export class AStarMode extends TpAuraMode implements AStarPathBuilder {
    static Companion: Tagged$Companion;
    static INSTANCE: AStarMode;
    readonly allowDiagonal: boolean;
    readonly maxIterations: number;
    // private maximumCost: number;
    // private /*not mapped: */ getMaximumCost(): number;
    // private maximumDistance: number;
    // private /*not mapped: */ getMaximumDistance(): number;
    // private packetHandler: EventHook<PacketEvent>;
    // private pathCache: AStarMode$PathCache | null;
    // private pathContext: CoroutineContext;
    // private pathStart: BlockPos$MutableBlockPos;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private stickAt: number;
    // private /*not mapped: */ getStickAt(): number;
    readonly stopRange: number;
    // private tickDistance: number;
    // private /*not mapped: */ getTickDistance(): number;
    // private tickHandler: EventHook<GameTickEvent>;
    // private tpBack: boolean;
    // private /*not mapped: */ getTpBack(): boolean;
    disable(): void;
    findPath(start: Vec3i, end: Vec3i, maxCost: number): Vec3i[];
    // private getAdjacentEdges(position: Vec3i): WeightedEdge<Vec3i>[];
    // private travel(path: Vec3i[]): void;
}
import type { Pair } from '../../../../../../../../kotlin/Pair.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleTrajectories$Show } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/trajectories/ModuleTrajectories$Show.d.ts'
import type { TrajectoryInfoRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer.d.ts'
import type { TrajectoryInfoRenderer$SimulationResult } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer$SimulationResult.d.ts'
import type { TrajectoryType } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryType.d.ts'
/**
 * Trajectories module
 *
 * Allows you to see where projectile items will land.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/trajectories/ModuleTrajectories.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/trajectories/ModuleTrajectories.kt:52}
 */
export class ModuleTrajectories extends ClientModule {
    static INSTANCE: ModuleTrajectories;
    // private activeLineWidth: number;
    // private /*not mapped: */ getActiveLineWidth(): number;
    // private /*not mapped: */ getActiveTrajectoryArrow(): boolean;
    // private /*not mapped: */ getActiveTrajectoryOther(): boolean;
    // private /*not mapped: */ getAlwaysShowBow(): boolean;
    // private cullBehindPlayer: boolean;
    // private /*not mapped: */ getCullBehindPlayer(): boolean;
    // private lineWidth: number;
    // private /*not mapped: */ getLineWidth(): number;
    // private maxRenderDistance: number;
    // private /*not mapped: */ getMaxRenderDistance(): number;
    // private maxSimulatedTicks: number;
    // private /*not mapped: */ getMaxSimulatedTicks(): number;
    // private /*not mapped: */ getOtherPlayers(): boolean;
    readonly renderHandler: EventHook<WorldRenderEvent>;
    // private show: ModuleTrajectories$Show[];
    // private /*not mapped: */ getShow(): ModuleTrajectories$Show[];
    // private showMultiShot: boolean;
    // private /*not mapped: */ getShowMultiShot(): boolean;
    // private simulationResults: Pair<TrajectoryInfoRenderer, TrajectoryInfoRenderer$SimulationResult>[];
    /*not mapped: */ getSimulationResults$net_ccbluex_liquidbounce(): Pair<TrajectoryInfoRenderer, TrajectoryInfoRenderer$SimulationResult>[];
    // private trajectoryTypes: TrajectoryType[];
    // private /*not mapped: */ getTrajectoryTypes(): TrajectoryType[];
    onDisabled(): void;
}
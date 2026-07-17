import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { BandwidthDebugChart } from '../../../../../net/minecraft/client/gui/components/debugchart/BandwidthDebugChart.d.ts'
import type { FpsDebugChart } from '../../../../../net/minecraft/client/gui/components/debugchart/FpsDebugChart.d.ts'
import type { PingDebugChart } from '../../../../../net/minecraft/client/gui/components/debugchart/PingDebugChart.d.ts'
import type { ProfilerPieChart } from '../../../../../net/minecraft/client/gui/components/debugchart/ProfilerPieChart.d.ts'
import type { TpsDebugChart } from '../../../../../net/minecraft/client/gui/components/debugchart/TpsDebugChart.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LocalSampleLogger } from '../../../../../net/minecraft/util/debugchart/LocalSampleLogger.d.ts'
import type { RemoteDebugSampleType } from '../../../../../net/minecraft/util/debugchart/RemoteDebugSampleType.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class DebugScreenOverlay extends Object {
    constructor(minecraft: Minecraft)
    // private bandwidthChart: BandwidthDebugChart;
    readonly bandwidthLogger: LocalSampleLogger;
    // private clientChunk: LevelChunk;
    // private font: Font;
    // private fpsChart: FpsDebugChart;
    // private frameTimeLogger: LocalSampleLogger;
    // private lastPos: ChunkPos;
    // private minecraft: Minecraft;
    // private pingChart: PingDebugChart;
    readonly pingLogger: LocalSampleLogger;
    readonly profilerPieChart: ProfilerPieChart;
    // private remoteSupportingLoggers: JavaMap<RemoteDebugSampleType, LocalSampleLogger>;
    // private renderFpsCharts: boolean;
    // private renderLightmapTexture: boolean;
    // private renderNetworkCharts: boolean;
    // private renderProfilerChart: boolean;
    // private serverChunk: CompletableFuture<LevelChunk>;
    readonly tickTimeLogger: LocalSampleLogger;
    // private tpsChart: TpsDebugChart;
    clearChunkCache(): void;
    // private extractLines(graphics: GuiGraphicsExtractor, lines: string[], alignLeft: boolean): void;
    extractRenderState(graphics: GuiGraphicsExtractor): void;
    getBandwidthLogger(): LocalSampleLogger;
    // private getClientChunk(): LevelChunk;
    // private getLevel(): Level;
    getPingLogger(): LocalSampleLogger;
    getProfilerPieChart(): ProfilerPieChart;
    // private getServerChunk(): LevelChunk;
    // private getServerLevel(): ServerLevel;
    getTickTimeLogger(): LocalSampleLogger;
    logFrameDuration(frameDuration: number): void;
    logRemoteSample(sample: number[], type: RemoteDebugSampleType): void;
    reset(): void;
    showDebugScreen(): boolean;
    showFpsCharts(): boolean;
    showLightmapTexture(): boolean;
    showNetworkCharts(): boolean;
    showProfilerChart(): boolean;
    toggleFpsCharts(): void;
    toggleLightmapTexture(): void;
    toggleNetworkCharts(): void;
    toggleProfilerChart(): void;
}
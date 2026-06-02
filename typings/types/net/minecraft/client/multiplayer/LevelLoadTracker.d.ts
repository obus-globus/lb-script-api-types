import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LevelLoadTracker$ClientState } from '../../../../net/minecraft/client/multiplayer/LevelLoadTracker$ClientState.d.ts'
import type { LocalPlayer } from '../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { LevelRenderer } from '../../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ChunkLoadStatusView } from '../../../../net/minecraft/server/level/progress/ChunkLoadStatusView.d.ts'
import type { LevelLoadListener } from '../../../../net/minecraft/server/level/progress/LevelLoadListener.d.ts'
import type { LevelLoadListener$Stage } from '../../../../net/minecraft/server/level/progress/LevelLoadListener$Stage.d.ts'
import type { LevelLoadProgressTracker } from '../../../../net/minecraft/server/level/progress/LevelLoadProgressTracker.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class LevelLoadTracker extends Object implements LevelLoadListener {
    static LEVEL_LOAD_CLOSE_DELAY_MS: number;
    static compose(paramfirst: LevelLoadListener, paramsecond: LevelLoadListener): LevelLoadListener;
    constructor()
    constructor(closeDelayMs: number)
    // private clientState: LevelLoadTracker$ClientState;
    // private closeDelayMs: number;
    readonly serverChunkStatusView: ChunkLoadStatusView;
    // private serverProgressTracker: LevelLoadProgressTracker;
    // private serverStage: LevelLoadListener$Stage;
    finish(stage: LevelLoadListener$Stage): void;
    hasProgress(): boolean;
    isLevelReady(): boolean;
    loadingPacketsReceived(): void;
    serverProgress(): number;
    setServerChunkStatusView(serverChunkStatusView: ChunkLoadStatusView): void;
    start(stage: LevelLoadListener$Stage, totalChunks: number): void;
    startClientLoad(player: LocalPlayer, level: ClientLevel, levelRenderer: LevelRenderer): void;
    statusView(): ChunkLoadStatusView;
    tickClientLoad(): void;
    update(stage: LevelLoadListener$Stage, currentChunks: number, totalChunks: number): void;
    updateFocus(dimension: ResourceKey<Level>, chunkPos: ChunkPos): void;
}
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkDebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/ChunkDebugRenderer.d.ts'
import type { IntegratedServer } from '../../../../../net/minecraft/client/server/IntegratedServer.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class ChunkDebugRenderer$ChunkData extends Object {
    private constructor(null_: ChunkDebugRenderer, server: IntegratedServer, camX: number, camZ: number)
    // private clientData: Map<ChunkPos, string>;
    // private serverData: CompletableFuture<Map<ChunkPos, string>>;
}
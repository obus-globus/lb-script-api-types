import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkLoadCounter } from '../../../../../net/minecraft/server/level/ChunkLoadCounter.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { PrepareSpawnTask$Ready } from '../../../../../net/minecraft/server/network/config/PrepareSpawnTask$Ready.d.ts'
import type { PrepareSpawnTask$State } from '../../../../../net/minecraft/server/network/config/PrepareSpawnTask$State.d.ts'
import type { Vec2 } from '../../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PrepareSpawnTask$Preparing extends Object implements PrepareSpawnTask$State {
    private constructor(null_: PrepareSpawnTask$Preparing, spawnPosition: CompletableFuture<Vec3>, spawnAngle: Vec2)
    // private chunkLoadCounter: ChunkLoadCounter;
    // private chunkLoadFuture: CompletableFuture<Object>;
    // private spawnAngle: Vec2;
    // private spawnLevel: ServerLevel;
    // private spawnPosition: CompletableFuture<Vec3>;
    cancel(): void;
    tick(): PrepareSpawnTask$Ready;
}
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Connection } from '../../../../../net/minecraft/network/Connection.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { CommonListenerCookie } from '../../../../../net/minecraft/server/network/CommonListenerCookie.d.ts'
import type { PrepareSpawnTask } from '../../../../../net/minecraft/server/network/config/PrepareSpawnTask.d.ts'
import type { PrepareSpawnTask$State } from '../../../../../net/minecraft/server/network/config/PrepareSpawnTask$State.d.ts'
import type { Vec2 } from '../../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PrepareSpawnTask$Ready extends Object implements PrepareSpawnTask$State {
    private constructor(null_: PrepareSpawnTask, spawnLevel: ServerLevel, spawnPosition: Vec3, spawnAngle: Vec2)
    // private spawnAngle: Vec2;
    // private spawnLevel: ServerLevel;
    // private spawnPosition: Vec3;
    keepAlive(): void;
    spawn(connection: Connection, cookie: CommonListenerCookie): ServerPlayer;
}
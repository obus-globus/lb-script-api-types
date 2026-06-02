import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PlayerLookup extends Object {
    static all(paramarg0: MinecraftServer): E[];
    static around(paramarg0: ServerLevel, paramarg1: Vec3i, paramarg2: number): E[];
    static around(paramarg0: ServerLevel, paramarg1: Vec3, paramarg2: number): E[];
    static level(paramarg0: ServerLevel): E[];
    static tracking(paramarg0: ServerLevel, paramarg1: BlockPos): E[];
    static tracking(paramarg0: ServerLevel, paramarg1: ChunkPos): E[];
    static tracking(paramarg0: Entity): E[];
    static tracking(paramarg0: BlockEntity): E[];
    private constructor()
}
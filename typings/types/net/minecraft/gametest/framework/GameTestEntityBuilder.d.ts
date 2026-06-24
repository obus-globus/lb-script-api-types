import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestHelper } from '../../../../net/minecraft/gametest/framework/GameTestHelper.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntitySpawnReason } from '../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Rotation } from '../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class GameTestEntityBuilder<E extends Entity> extends Object {
    constructor(testHelper: GameTestHelper, entityType: EntityType<E>, position: Vec3)
    // private entityType: EntityType<E>;
    // private position: Vec3;
    // private requirePersistence: boolean;
    // private rotation: Rotation;
    // private spawnReason: EntitySpawnReason;
    // private testHelper: GameTestHelper;
    requirePersistence(requirePersistence: boolean): GameTestEntityBuilder<E>;
    rotation(rotation: Rotation): GameTestEntityBuilder<E>;
    spawn(): E;
    spawn(amount: number): E[];
    spawnReason(spawnReason: EntitySpawnReason): GameTestEntityBuilder<E>;
}
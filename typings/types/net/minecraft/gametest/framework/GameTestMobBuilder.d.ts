import type { GameTestEntityBuilder } from '../../../../net/minecraft/gametest/framework/GameTestEntityBuilder.d.ts'
import type { GameTestHelper } from '../../../../net/minecraft/gametest/framework/GameTestHelper.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Mob } from '../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class GameTestMobBuilder<E extends Mob> extends GameTestEntityBuilder<E> {
    constructor(testHelper: GameTestHelper, entityType: EntityType<E>, position: Vec3)
    // private freeWill: boolean;
    spawn(): E;
    spawn(amount: number): E[];
    withNoFreeWill(): GameTestMobBuilder<E>;
}
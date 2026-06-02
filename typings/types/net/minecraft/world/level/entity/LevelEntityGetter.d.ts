import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbortableIterationConsumer } from '../../../../../net/minecraft/util/AbortableIterationConsumer.d.ts'
import type { EntityAccess } from '../../../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
import type { EntityTypeTest } from '../../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export interface LevelEntityGetter<T extends EntityAccess> extends Object{
    get(id: UUID): T;
    get(id: number): T;
    get(type: EntityTypeTest<T, U>, consumer: (param0: U) => net.minecraft.util.AbortableIterationConsumer.Continuation): void;
    get(type: EntityTypeTest<T, U>, bb: AABB, consumer: (param0: U) => net.minecraft.util.AbortableIterationConsumer.Continuation): void;
    get(bb: AABB, output: (param0: T) => void): void;
    getAll(): T[];
}
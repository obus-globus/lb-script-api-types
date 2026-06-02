import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbortableIterationConsumer } from '../../../../../net/minecraft/util/AbortableIterationConsumer.d.ts'
import type { EntityAccess } from '../../../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
import type { EntityTypeTest } from '../../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
export class EntityLookup<T extends EntityAccess> extends Object {
    constructor()
    // private byId: Int2ObjectMap<T>;
    // private byUuid: Map<UUID, T>;
    add(entity: T): void;
    count(): number;
    getAllEntities(): T[];
    getEntities(type: EntityTypeTest<T, U>, consumer: (param0: U) => net.minecraft.util.AbortableIterationConsumer.Continuation): void;
    getEntity(id: UUID): T;
    getEntity(id: number): T;
    remove(entity: T): void;
}
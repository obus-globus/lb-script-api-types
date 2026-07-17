import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbortableIterationConsumer } from '../../../../../net/minecraft/util/AbortableIterationConsumer.d.ts'
import type { AbortableIterationConsumer$Continuation } from '../../../../../net/minecraft/util/AbortableIterationConsumer$Continuation.d.ts'
import type { EntityAccess } from '../../../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
import type { EntityTypeTest } from '../../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
export class EntityLookup<T extends EntityAccess> extends Object {
    constructor()
    // private byId: JavaMap<any, any>;
    // private byUuid: JavaMap<UUID, T>;
    add(entity: T): void;
    count(): number;
    getAllEntities(): T[];
    getEntities<U extends T>(type: EntityTypeTest<T, U>, consumer: (param0: U) => AbortableIterationConsumer$Continuation): void;
    getEntity(id: UUID): T;
    getEntity(id: number): T;
    remove(entity: T): void;
}
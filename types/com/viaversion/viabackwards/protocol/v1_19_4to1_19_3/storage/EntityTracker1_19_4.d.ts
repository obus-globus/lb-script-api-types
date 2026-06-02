import type { LinkedEntityStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_19_4to1_19_3/storage/LinkedEntityStorage.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityTypes1_19_3 } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_19_3.d.ts'
import type { EntityTrackerBase } from '../../../../../../com/viaversion/viaversion/data/entity/EntityTrackerBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EntityTracker1_19_4 extends EntityTrackerBase {
    constructor(arg0: UserConnection)
    // private generatedEntities: (Object | null)[];
    clearEntities(): void;
    clearLinkedEntities(arg0: number): void;
    linkedEntityStorage(arg0: number): LinkedEntityStorage;
    // private nextEntityId(): number;
    removeEntity(arg0: number): void;
    spawnEntity(arg0: EntityTypes1_19_3, arg1: number, arg2: number, arg3: number, arg4: number): number;
}
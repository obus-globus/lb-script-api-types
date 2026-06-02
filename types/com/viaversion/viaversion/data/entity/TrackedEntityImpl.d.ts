import type { StoredEntityData } from '../../../../../com/viaversion/viaversion/api/data/entity/StoredEntityData.d.ts'
import type { TrackedEntity } from '../../../../../com/viaversion/viaversion/api/data/entity/TrackedEntity.d.ts'
import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TrackedEntityImpl extends Object implements TrackedEntity {
    constructor(arg0: EntityType)
    // private data: StoredEntityData;
    // private entityType: EntityType;
    // private sentEntityData: boolean;
    data(): StoredEntityData;
    entityType(): EntityType;
    hasData(): boolean;
    hasSentEntityData(): boolean;
    sentEntityData(arg0: boolean): void;
    toString(): string;
}
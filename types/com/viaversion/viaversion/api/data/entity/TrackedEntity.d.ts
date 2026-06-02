import type { StoredEntityData } from '../../../../../../com/viaversion/viaversion/api/data/entity/StoredEntityData.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TrackedEntity extends Object{
    data(): StoredEntityData;
    entityType(): EntityType;
    hasData(): boolean;
    hasSentEntityData(): boolean;
    sentEntityData(arg0: boolean): void;
}
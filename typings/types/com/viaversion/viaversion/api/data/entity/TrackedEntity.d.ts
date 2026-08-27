import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TrackedEntity extends Object{
    entityType(): EntityType;
    get<T extends StorableObject>(arg0: Class<T>): T;
    has(arg0: Class<StorableObject>): boolean;
    hasSentEntityData(): boolean;
    put(arg0: StorableObject): void;
    remove<T extends StorableObject>(arg0: Class<T>): T;
    sentEntityData(arg0: boolean): void;
}
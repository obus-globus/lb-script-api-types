import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { TrackedEntity } from '../../../../../com/viaversion/viaversion/api/data/entity/TrackedEntity.d.ts'
import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TrackedEntityImpl extends Object implements TrackedEntity {
    constructor(arg0: EntityType)
    // private entityType: EntityType;
    // private sentEntityData: boolean;
    // private storedObjects: JavaMap<Class<Object>, StorableObject>;
    entityType(): EntityType;
    get<T extends StorableObject>(arg0: Class<T>): T;
    has(arg0: Class<StorableObject>): boolean;
    hasSentEntityData(): boolean;
    put(arg0: StorableObject): void;
    remove<T extends StorableObject>(arg0: Class<T>): T;
    sentEntityData(arg0: boolean): void;
    // private storedObjects(): JavaMap<Class<Object>, StorableObject>;
    toString(): string;
}
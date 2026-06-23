import type { StoredEntityData } from '../../../../../com/viaversion/viaversion/api/data/entity/StoredEntityData.d.ts'
import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StoredEntityDataImpl extends Object implements StoredEntityData {
    constructor(arg0: EntityType)
    // private storedObjects: Map<Class<Object>, Object>;
    // private type: EntityType;
    get<T extends unknown>(arg0: Class<T>): T;
    has(arg0: Class<Object>): boolean;
    put(arg0: Object): void;
    remove<T extends unknown>(arg0: Class<T>): T;
    type(): EntityType;
}
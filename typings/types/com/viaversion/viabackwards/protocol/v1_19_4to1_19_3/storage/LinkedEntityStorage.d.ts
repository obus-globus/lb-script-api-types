import type { EntityPositionStorage } from '../../../../../../com/viaversion/viabackwards/api/entities/storage/EntityPositionStorage.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
export class LinkedEntityStorage extends EntityPositionStorage implements StorableObject {
    constructor()
    readonly entities: number[];
    entities(): number[];
    onRemove(): void;
    remove(arg0: UserConnection): void;
    setEntities(arg0: number[]): void;
}
import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StoredObject extends Object implements StorableObject {
    constructor(arg0: UserConnection)
    getUser(): UserConnection;
    onRemove(): void;
    user(): UserConnection;
}
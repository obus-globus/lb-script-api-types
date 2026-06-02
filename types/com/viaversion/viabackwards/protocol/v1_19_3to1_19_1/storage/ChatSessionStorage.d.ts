import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChatSessionStorage extends Object implements StorableObject {
    constructor()
    // private uuid: UUID;
    onRemove(): void;
    uuid(): UUID;
}
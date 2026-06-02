import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ProtocolMetadataStorage extends Object implements StorableObject {
    constructor()
    authenticate: boolean;
    skipEncryption: boolean;
    onRemove(): void;
}
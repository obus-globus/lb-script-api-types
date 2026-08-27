import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ProtocolMetadataStorage extends Object implements StorableObject {
    constructor()
    readonly authenticate: boolean;
    readonly skipEncryption: boolean;
    isAuthenticate(): boolean;
    isSkipEncryption(): boolean;
    onRemove(): void;
    setAuthenticate(arg0: boolean): void;
    setSkipEncryption(arg0: boolean): void;
}
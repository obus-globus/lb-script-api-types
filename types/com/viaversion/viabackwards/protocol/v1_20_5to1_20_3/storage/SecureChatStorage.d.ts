import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SecureChatStorage extends Object implements StorableObject {
    constructor()
    readonly enforcesSecureChat: boolean;
    enforcesSecureChat(): boolean;
    onRemove(): void;
    setEnforcesSecureChat(arg0: boolean): void;
}
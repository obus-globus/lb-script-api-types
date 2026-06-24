import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Hasher } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/hash/Hasher.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HashedItemConverterStorage extends Object implements StorableObject {
    constructor(arg0: Protocol<any, any, any, any>, arg1: UserConnection)
    // private hasher: Hasher;
    hasher(): Hasher;
    onRemove(): void;
}
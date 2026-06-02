import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StoredPainting extends Object implements StorableObject {
    constructor(arg0: number, arg1: UUID, arg2: BlockPosition, arg3: number)
    constructor(arg0: number, arg1: UUID, arg2: BlockPosition, arg3: number)
    // private direction: number;
    // private entityId: number;
    // private position: BlockPosition;
    readonly type: number;
    // private uuid: UUID;
    direction(): number;
    entityId(): number;
    onRemove(): void;
    position(): BlockPosition;
    setType(arg0: number): void;
    type(): number;
    uuid(): UUID;
}
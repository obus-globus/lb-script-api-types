import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ResourcepackIDStorage extends Record implements StorableObject {
    constructor(uuid: UUID)
    // private uuid: UUID;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    onRemove(): void;
    toString(): string;
    uuid(): UUID;
}
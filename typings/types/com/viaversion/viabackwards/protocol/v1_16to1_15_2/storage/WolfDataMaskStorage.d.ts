import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WolfDataMaskStorage extends Object implements StorableObject {
    constructor(arg0: number)
    onRemove(): void;
    setTameableMask(arg0: number): void;
    tameableMask(): number;
}
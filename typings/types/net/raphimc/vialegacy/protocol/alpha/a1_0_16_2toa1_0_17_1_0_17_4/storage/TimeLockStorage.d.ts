import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TimeLockStorage extends Object implements StorableObject {
    constructor(arg0: number)
    readonly time: number;
    getTime(): number;
    onRemove(): void;
    setTime(arg0: number): void;
}
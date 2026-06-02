import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SequenceStorage extends Object implements StorableObject {
    constructor()
    // private lock: Object;
    // private sequenceId: number;
    onRemove(): void;
    sequenceId(): number;
    setSequenceId(arg0: number): number;
}
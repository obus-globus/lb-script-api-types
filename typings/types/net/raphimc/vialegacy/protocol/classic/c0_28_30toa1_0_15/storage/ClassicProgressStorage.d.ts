import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ClassicProgressStorage extends Object implements StorableObject {
    constructor()
    progress: number;
    status: string;
    upperBound: number;
    onRemove(): void;
}
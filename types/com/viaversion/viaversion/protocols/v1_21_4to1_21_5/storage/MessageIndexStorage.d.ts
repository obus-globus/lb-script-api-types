import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MessageIndexStorage extends Object implements StorableObject {
    constructor()
    readonly index: number;
    getAndIncrease(): number;
    index(): number;
    onRemove(): void;
    setIndex(arg0: number): void;
}
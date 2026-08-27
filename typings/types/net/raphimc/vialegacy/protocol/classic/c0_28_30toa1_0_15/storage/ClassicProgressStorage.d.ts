import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ClassicProgressStorage extends Object implements StorableObject {
    constructor()
    readonly progress: number;
    readonly status: string;
    readonly upperBound: number;
    getProgress(): number;
    getStatus(): string;
    getUpperBound(): number;
    onRemove(): void;
    setProgress(arg0: number): void;
    setStatus(arg0: string): void;
    setUpperBound(arg0: number): void;
}
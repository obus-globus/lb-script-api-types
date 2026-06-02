import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DifficultyStorage extends Object implements StorableObject {
    constructor()
    readonly difficulty: number;
    getDifficulty(): number;
    onRemove(): void;
    setDifficulty(arg0: number): void;
}
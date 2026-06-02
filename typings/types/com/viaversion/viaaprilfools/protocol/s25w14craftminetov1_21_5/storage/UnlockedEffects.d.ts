import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class UnlockedEffects extends Record implements StorableObject {
    constructor(unlockedEffects: number[])
    // private unlockedEffects: number[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    onRemove(): void;
    toString(): string;
    unlockedEffects(): number[];
}
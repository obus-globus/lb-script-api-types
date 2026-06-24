import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlTransientMemory$PersistentMapping$GlAllocation extends Record {
    private constructor(glBuffer: number, hostPtr: number, size: number)
    // private glBuffer: number;
    // private hostPtr: number;
    // private size: number;
    equals(o: Object | null): boolean;
    glBuffer(): number;
    hashCode(): number;
    hostPtr(): number;
    size(): number;
    toString(): string;
}
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FrameSize extends Record {
    constructor(width: number, height: number)
    // private height: number;
    // private width: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    toString(): string;
    width(): number;
}
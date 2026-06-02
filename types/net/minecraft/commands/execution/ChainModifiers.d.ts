import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChainModifiers extends Record {
    static DEFAULT: ChainModifiers;
    // private flags: number;
    equals(o: Object | null): boolean;
    flags(): number;
    hashCode(): number;
    isForked(): boolean;
    isReturn(): boolean;
    // private setFlag(flag: number): ChainModifiers;
    setForked(): ChainModifiers;
    setReturn(): ChainModifiers;
    toString(): string;
}
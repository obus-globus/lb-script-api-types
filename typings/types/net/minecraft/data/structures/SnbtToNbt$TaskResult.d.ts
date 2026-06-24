import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SnbtToNbt$TaskResult extends Record {
    private constructor(name: string, payload: number[], hash: HashCode)
    // private hash: HashCode;
    // private name: string;
    // private payload: number[];
    equals(o: Object | null): boolean;
    hash(): HashCode;
    hashCode(): number;
    name(): string;
    payload(): number[];
    toString(): string;
}
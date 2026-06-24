import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NeighborsUpdateRenderer$LastUpdate extends Record {
    private constructor(count: number, age: number)
    // private age: number;
    // private count: number;
    age(): number;
    count(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    tryCount(age: number): NeighborsUpdateRenderer$LastUpdate;
}
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpvVariable extends Record {
    constructor(name: string, locationOffset: number)
    // private locationOffset: number;
    // private name: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    locationOffset(): number;
    name(): string;
    toString(): string;
}
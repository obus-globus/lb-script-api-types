import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class VillagerData extends Record {
    constructor(type: number, profession: number, level: number)
    // private level: number;
    // private profession: number;
    // private type: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    level(): number;
    profession(): number;
    toString(): string;
    type(): number;
}
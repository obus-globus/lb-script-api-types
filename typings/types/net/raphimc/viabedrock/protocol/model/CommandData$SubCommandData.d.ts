import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CommandData$SubCommandData extends Record {
    constructor(name: string, values: { [key: string]: number })
    // private name: string;
    // private values: { [key: string]: number };
    addValues(arg0: { [key: string]: number }): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
    values(): { [key: string]: number };
}
import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CommandData$SubCommandData extends Record {
    constructor(name: string, values: JavaMap<string, number>)
    // private name: string;
    // private values: JavaMap<string, number>;
    addValues(arg0: JavaMap<string, number>): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
    values(): JavaMap<string, number>;
}
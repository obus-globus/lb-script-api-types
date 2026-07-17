import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CommandData$EnumData extends Object {
    constructor(arg0: string, arg1: string[], arg2: boolean)
    // private name: string;
    // private soft: boolean;
    // private values: JavaMap<string, number[]>;
    addValues(arg0: string[]): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    removeValues(arg0: string[]): void;
    soft(): boolean;
    toString(): string;
    values(): JavaMap<string, number[]>;
}
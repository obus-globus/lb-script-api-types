import type { StringRange } from '../../../../com/mojang/brigadier/context/StringRange.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ParsedArgument<S extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object {
    constructor(arg0: number, arg1: number, arg2: T)
    readonly range: StringRange;
    readonly result: T;
    equals(arg0: Object | null): boolean;
    getRange(): StringRange;
    getResult(): T;
    hashCode(): number;
}
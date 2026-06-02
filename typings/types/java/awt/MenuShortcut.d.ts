import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class MenuShortcut extends Object implements Serializable {
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    key: number;
    // private usesShift: boolean;
    equals(arg0: MenuShortcut): boolean;
    equals(arg0: Object | null): boolean;
    getKey(): number;
    hashCode(): number;
    paramString(): string;
    toString(): string;
    usesShiftModifier(): boolean;
}
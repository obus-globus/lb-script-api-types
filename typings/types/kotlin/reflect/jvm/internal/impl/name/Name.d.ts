import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class Name extends Object implements Comparable<Name> {
    static guessByFirstCharacter(paramarg0: string): Name;
    static identifier(paramarg0: string): Name;
    static isValidIdentifier(paramarg0: string): boolean;
    static special(paramarg0: string): Name;
    private constructor(arg0: string, arg1: boolean)
    // private name: string;
    readonly special: boolean;
    asString(): string;
    asStringStripSpecialMarkers(): string;
    compareTo(arg0: Name): number;
    equals(arg0: Object | null): boolean;
    getIdentifier(): string;
    hashCode(): number;
    isSpecial(): boolean;
    toString(): string;
}
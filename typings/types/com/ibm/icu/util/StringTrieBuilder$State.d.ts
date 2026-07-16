import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class StringTrieBuilder$State extends Enum<StringTrieBuilder$State> {
    static ADDING: StringTrieBuilder$State;
    static BUILDING_FAST: StringTrieBuilder$State;
    static BUILDING_SMALL: StringTrieBuilder$State;
    static BUILT: StringTrieBuilder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): StringTrieBuilder$State;
    static values(): StringTrieBuilder$State[];
    private constructor()
    name(): "ADDING" | "BUILDING_FAST" | "BUILDING_SMALL" | "BUILT";
}
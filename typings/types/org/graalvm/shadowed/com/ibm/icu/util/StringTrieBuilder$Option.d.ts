import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class StringTrieBuilder$Option extends Enum<StringTrieBuilder$Option> {
    static FAST: StringTrieBuilder$Option;
    static SMALL: StringTrieBuilder$Option;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StringTrieBuilder$Option;
    static values(): StringTrieBuilder$Option[];
    private constructor()
    name(): "FAST" | "SMALL";
}
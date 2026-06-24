import type { Lang$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Lang$LangRule extends Object {
    private constructor(arg0: Pattern, arg1: string[], arg2: boolean)
    constructor(arg0: Pattern, arg1: (Object | null)[], arg2: boolean, arg3: Lang$1)
    // private acceptOnMatch: boolean;
    // private languages: string[];
    // private pattern: Pattern;
    matches(arg0: string): boolean;
}
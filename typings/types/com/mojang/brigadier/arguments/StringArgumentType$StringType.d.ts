import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class StringArgumentType$StringType extends Enum<StringArgumentType$StringType> {
    static GREEDY_PHRASE: StringArgumentType$StringType;
    static QUOTABLE_PHRASE: StringArgumentType$StringType;
    static SINGLE_WORD: StringArgumentType$StringType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StringArgumentType$StringType;
    static values(): StringArgumentType$StringType[];
    private constructor(...arg2: string[])
    readonly examples: string[];
    getExamples(): string[];
    name(): "SINGLE_WORD" | "QUOTABLE_PHRASE" | "GREEDY_PHRASE";
}
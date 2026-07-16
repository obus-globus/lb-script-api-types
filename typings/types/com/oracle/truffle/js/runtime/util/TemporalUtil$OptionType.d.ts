import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalUtil$OptionType extends Enum<TemporalUtil$OptionType> {
    static BOOLEAN: TemporalUtil$OptionType;
    static NUMBER: TemporalUtil$OptionType;
    static NUMBER_AND_STRING: TemporalUtil$OptionType;
    static STRING: TemporalUtil$OptionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TemporalUtil$OptionType;
    static values(): TemporalUtil$OptionType[];
    private constructor()
    allowsBoolean(): boolean;
    allowsNumber(): boolean;
    allowsString(): boolean;
    getLast(): TemporalUtil$OptionType;
    name(): "STRING" | "NUMBER" | "BOOLEAN" | "NUMBER_AND_STRING";
}
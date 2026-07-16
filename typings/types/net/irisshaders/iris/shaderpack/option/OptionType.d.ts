import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class OptionType extends Enum<OptionType> {
    static CONST: OptionType;
    static DEFINE: OptionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): OptionType;
    static values(): OptionType[];
    private constructor()
    name(): "DEFINE" | "CONST";
}
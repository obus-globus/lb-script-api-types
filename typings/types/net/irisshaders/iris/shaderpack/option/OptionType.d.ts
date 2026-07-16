import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class OptionType extends Enum<OptionType> {
    static CONST: OptionType;
    static DEFINE: OptionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OptionType;
    static values(): OptionType[];
    private constructor()
    name(): "DEFINE" | "CONST";
}
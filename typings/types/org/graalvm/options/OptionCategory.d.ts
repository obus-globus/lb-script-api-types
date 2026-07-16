import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class OptionCategory extends Enum<OptionCategory> {
    static EXPERT: OptionCategory;
    static INTERNAL: OptionCategory;
    static USER: OptionCategory;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): OptionCategory;
    static values(): OptionCategory[];
    private constructor()
    name(): "USER" | "EXPERT" | "INTERNAL";
}
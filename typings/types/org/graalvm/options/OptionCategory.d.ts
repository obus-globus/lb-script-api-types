import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class OptionCategory extends Enum<OptionCategory> {
    static EXPERT: OptionCategory;
    static INTERNAL: OptionCategory;
    static USER: OptionCategory;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): OptionCategory;
    static values(): OptionCategory[];
    private constructor()
    name(): "USER" | "EXPERT" | "INTERNAL";
}
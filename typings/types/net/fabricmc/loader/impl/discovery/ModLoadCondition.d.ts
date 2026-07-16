import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ModLoadCondition extends Enum<ModLoadCondition> {
    static ALWAYS: ModLoadCondition;
    static IF_NEEDED: ModLoadCondition;
    static IF_POSSIBLE: ModLoadCondition;
    static IF_RECOMMENDED: ModLoadCondition;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModLoadCondition;
    static values(): ModLoadCondition[];
    private constructor()
    name(): "ALWAYS" | "IF_POSSIBLE" | "IF_RECOMMENDED" | "IF_NEEDED";
}
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class LocaleMatcher$Demotion extends Enum<LocaleMatcher$Demotion> {
    static NONE: LocaleMatcher$Demotion;
    static REGION: LocaleMatcher$Demotion;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LocaleMatcher$Demotion;
    static values(): LocaleMatcher$Demotion[];
    private constructor()
    name(): "NONE" | "REGION";
}
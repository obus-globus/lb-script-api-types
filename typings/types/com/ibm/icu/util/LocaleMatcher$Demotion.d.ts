import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LocaleMatcher$Demotion extends Enum<LocaleMatcher$Demotion> {
    static NONE: LocaleMatcher$Demotion;
    static REGION: LocaleMatcher$Demotion;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LocaleMatcher$Demotion;
    static values(): LocaleMatcher$Demotion[];
    private constructor()
    name(): "NONE" | "REGION";
}
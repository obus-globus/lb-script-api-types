import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UScript$ScriptUsage extends Enum<UScript$ScriptUsage> {
    static ASPIRATIONAL: UScript$ScriptUsage;
    static EXCLUDED: UScript$ScriptUsage;
    static LIMITED_USE: UScript$ScriptUsage;
    static NOT_ENCODED: UScript$ScriptUsage;
    static RECOMMENDED: UScript$ScriptUsage;
    static UNKNOWN: UScript$ScriptUsage;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UScript$ScriptUsage;
    static values(): (Object | null)[];
    private constructor()
    name(): "NOT_ENCODED" | "UNKNOWN" | "EXCLUDED" | "LIMITED_USE" | "ASPIRATIONAL" | "RECOMMENDED";
}
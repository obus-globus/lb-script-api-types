import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class AoConfig extends Enum<AoConfig> {
    static EMULATE: AoConfig;
    static ENHANCED: AoConfig;
    static HYBRID: AoConfig;
    static VANILLA: AoConfig;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AoConfig;
    static values(): AoConfig[];
    private constructor()
    name(): "VANILLA" | "ENHANCED" | "EMULATE" | "HYBRID";
}
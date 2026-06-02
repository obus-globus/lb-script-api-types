import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class AoConfig extends Enum<AoConfig> {
    static EMULATE: AoConfig;
    static ENHANCED: AoConfig;
    static HYBRID: AoConfig;
    static VANILLA: AoConfig;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AoConfig;
    static values(): (Object | null)[];
    private constructor()
    name(): "VANILLA" | "ENHANCED" | "EMULATE" | "HYBRID";
}
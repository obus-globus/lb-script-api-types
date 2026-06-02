import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MixinEnvironment$Option$Inherit extends Enum<MixinEnvironment$Option$Inherit> {
    static ALLOW_OVERRIDE: MixinEnvironment$Option$Inherit;
    static ALWAYS_FALSE: MixinEnvironment$Option$Inherit;
    static INDEPENDENT: MixinEnvironment$Option$Inherit;
    static INHERIT: MixinEnvironment$Option$Inherit;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MixinEnvironment$Option$Inherit;
    static values(): (Object | null)[];
    private constructor()
    name(): "INHERIT" | "ALLOW_OVERRIDE" | "INDEPENDENT" | "ALWAYS_FALSE";
}
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ShadowCullState extends Enum<ShadowCullState> {
    static ADVANCED: ShadowCullState;
    static DEFAULT: ShadowCullState;
    static DISTANCE: ShadowCullState;
    static SAFE_ZONE: ShadowCullState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ShadowCullState;
    static values(): ShadowCullState[];
    private constructor()
    name(): "DEFAULT" | "ADVANCED" | "SAFE_ZONE" | "DISTANCE";
}
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Hud$ContextualInfo extends Enum<Hud$ContextualInfo> {
    static EMPTY: Hud$ContextualInfo;
    static EXPERIENCE: Hud$ContextualInfo;
    static JUMPABLE_VEHICLE: Hud$ContextualInfo;
    static LOCATOR: Hud$ContextualInfo;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Hud$ContextualInfo;
    static values(): Hud$ContextualInfo[];
    private constructor()
    name(): "EMPTY" | "EXPERIENCE" | "LOCATOR" | "JUMPABLE_VEHICLE";
}
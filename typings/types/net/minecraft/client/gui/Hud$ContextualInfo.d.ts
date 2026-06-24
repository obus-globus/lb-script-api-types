import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Hud$ContextualInfo extends Enum<Hud$ContextualInfo> {
    static EMPTY: Hud$ContextualInfo;
    static EXPERIENCE: Hud$ContextualInfo;
    static JUMPABLE_VEHICLE: Hud$ContextualInfo;
    static LOCATOR: Hud$ContextualInfo;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Hud$ContextualInfo;
    static values(): (Object | null)[];
    private constructor()
    name(): "EMPTY" | "EXPERIENCE" | "LOCATOR" | "JUMPABLE_VEHICLE";
}
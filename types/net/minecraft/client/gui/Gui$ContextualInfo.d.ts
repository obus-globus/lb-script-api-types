import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Gui$ContextualInfo extends Enum<Gui$ContextualInfo> {
    static EMPTY: Gui$ContextualInfo;
    static EXPERIENCE: Gui$ContextualInfo;
    static JUMPABLE_VEHICLE: Gui$ContextualInfo;
    static LOCATOR: Gui$ContextualInfo;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Gui$ContextualInfo;
    static values(): (Object | null)[];
    private constructor()
    name(): "EMPTY" | "EXPERIENCE" | "LOCATOR" | "JUMPABLE_VEHICLE";
}
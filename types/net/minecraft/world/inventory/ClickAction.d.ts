import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ClickAction extends Enum<ClickAction> {
    static PRIMARY: ClickAction;
    static SECONDARY: ClickAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ClickAction;
    static values(): (Object | null)[];
    private constructor()
    name(): "PRIMARY" | "SECONDARY";
}
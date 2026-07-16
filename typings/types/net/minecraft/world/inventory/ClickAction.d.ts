import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ClickAction extends Enum<ClickAction> {
    static PRIMARY: ClickAction;
    static SECONDARY: ClickAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ClickAction;
    static values(): ClickAction[];
    private constructor()
    name(): "PRIMARY" | "SECONDARY";
}
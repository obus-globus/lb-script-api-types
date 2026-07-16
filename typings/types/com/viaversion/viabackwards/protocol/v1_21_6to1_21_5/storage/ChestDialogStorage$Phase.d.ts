import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ChestDialogStorage$Phase extends Enum<ChestDialogStorage$Phase> {
    static ANVIL_VIEW: ChestDialogStorage$Phase;
    static DIALOG_VIEW: ChestDialogStorage$Phase;
    static WAITING_FOR_RESPONSE: ChestDialogStorage$Phase;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ChestDialogStorage$Phase;
    static values(): ChestDialogStorage$Phase[];
    private constructor()
    name(): "DIALOG_VIEW" | "ANVIL_VIEW" | "WAITING_FOR_RESPONSE";
}
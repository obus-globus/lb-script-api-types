import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PrettyPrinter$Alignment extends Enum<PrettyPrinter$Alignment> {
    static LEFT: PrettyPrinter$Alignment;
    static RIGHT: PrettyPrinter$Alignment;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PrettyPrinter$Alignment;
    static values(): PrettyPrinter$Alignment[];
    private constructor()
    name(): "LEFT" | "RIGHT";
}
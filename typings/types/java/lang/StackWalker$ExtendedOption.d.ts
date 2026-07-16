import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class StackWalker$ExtendedOption extends Enum<StackWalker$ExtendedOption> {
    static LOCALS_AND_OPERANDS: StackWalker$ExtendedOption;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): StackWalker$ExtendedOption;
    static values(): StackWalker$ExtendedOption[];
    private constructor()
    name(): "LOCALS_AND_OPERANDS";
}
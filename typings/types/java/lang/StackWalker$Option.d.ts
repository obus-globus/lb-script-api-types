import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class StackWalker$Option extends Enum<StackWalker$Option> {
    static DROP_METHOD_INFO: StackWalker$Option;
    static RETAIN_CLASS_REFERENCE: StackWalker$Option;
    static SHOW_HIDDEN_FRAMES: StackWalker$Option;
    static SHOW_REFLECT_FRAMES: StackWalker$Option;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): StackWalker$Option;
    static values(): StackWalker$Option[];
    private constructor()
    name(): "RETAIN_CLASS_REFERENCE" | "DROP_METHOD_INFO" | "SHOW_REFLECT_FRAMES" | "SHOW_HIDDEN_FRAMES";
}
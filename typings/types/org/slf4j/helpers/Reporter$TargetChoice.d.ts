import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Reporter$TargetChoice extends Enum<Reporter$TargetChoice> {
    static Stderr: Reporter$TargetChoice;
    static Stdout: Reporter$TargetChoice;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Reporter$TargetChoice;
    static values(): Reporter$TargetChoice[];
    private constructor()
    name(): "Stderr" | "Stdout";
}
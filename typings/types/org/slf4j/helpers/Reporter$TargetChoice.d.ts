import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Reporter$TargetChoice extends Enum<Reporter$TargetChoice> {
    static Stderr: Reporter$TargetChoice;
    static Stdout: Reporter$TargetChoice;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Reporter$TargetChoice;
    static values(): (Object | null)[];
    private constructor()
    name(): "Stderr" | "Stdout";
}
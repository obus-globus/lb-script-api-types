import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RecursiveDeleteOption extends Enum<RecursiveDeleteOption> {
    static ALLOW_INSECURE: RecursiveDeleteOption;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RecursiveDeleteOption;
    static values(): RecursiveDeleteOption[];
    private constructor()
    name(): "ALLOW_INSECURE";
}
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RecursiveDeleteOption extends Enum<RecursiveDeleteOption> {
    static ALLOW_INSECURE: RecursiveDeleteOption;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RecursiveDeleteOption;
    static values(): (Object | null)[];
    private constructor()
    name(): "ALLOW_INSECURE";
}
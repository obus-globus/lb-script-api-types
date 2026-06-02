import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CopyActionResult extends Enum<CopyActionResult> implements Serializable {
    static CONTINUE: CopyActionResult;
    static SKIP_SUBTREE: CopyActionResult;
    static TERMINATE: CopyActionResult;
    static getEntries(): CopyActionResult[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CopyActionResult;
    static values(): (Object | null)[];
    private constructor()
    name(): "CONTINUE" | "SKIP_SUBTREE" | "TERMINATE";
}
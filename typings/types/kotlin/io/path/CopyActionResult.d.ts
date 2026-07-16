import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CopyActionResult extends Enum<CopyActionResult> implements Serializable {
    static CONTINUE: CopyActionResult;
    static SKIP_SUBTREE: CopyActionResult;
    static TERMINATE: CopyActionResult;
    static getEntries(): CopyActionResult[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CopyActionResult;
    static values(): CopyActionResult[];
    private constructor()
    name(): "CONTINUE" | "SKIP_SUBTREE" | "TERMINATE";
}
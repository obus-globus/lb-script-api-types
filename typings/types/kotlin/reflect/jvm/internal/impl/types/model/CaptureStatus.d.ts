import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class CaptureStatus extends Enum<CaptureStatus> {
    static FOR_INCORPORATION: CaptureStatus;
    static FOR_SUBTYPING: CaptureStatus;
    static FROM_EXPRESSION: CaptureStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CaptureStatus;
    static values(): CaptureStatus[];
    private constructor()
    name(): "FOR_SUBTYPING" | "FOR_INCORPORATION" | "FROM_EXPRESSION";
}
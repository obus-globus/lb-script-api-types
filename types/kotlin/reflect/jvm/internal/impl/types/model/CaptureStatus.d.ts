import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class CaptureStatus extends Enum<CaptureStatus> {
    static FOR_INCORPORATION: CaptureStatus;
    static FOR_SUBTYPING: CaptureStatus;
    static FROM_EXPRESSION: CaptureStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CaptureStatus;
    static values(): (Object | null)[];
    private constructor()
    name(): "FOR_SUBTYPING" | "FOR_INCORPORATION" | "FROM_EXPRESSION";
}
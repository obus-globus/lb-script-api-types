import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ReplaceStringParser$Token$Kind extends Enum<ReplaceStringParser$Token$Kind> {
    static captureGroup: ReplaceStringParser$Token$Kind;
    static literal: ReplaceStringParser$Token$Kind;
    static match: ReplaceStringParser$Token$Kind;
    static matchHead: ReplaceStringParser$Token$Kind;
    static matchTail: ReplaceStringParser$Token$Kind;
    static namedCaptureGroup: ReplaceStringParser$Token$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ReplaceStringParser$Token$Kind;
    static values(): ReplaceStringParser$Token$Kind[];
    private constructor()
    name(): "literal" | "match" | "matchHead" | "matchTail" | "captureGroup" | "namedCaptureGroup";
}
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class FailureHandlingKind extends Enum<FailureHandlingKind> {
    static Abort: FailureHandlingKind;
    static TextOnlyTransactional: FailureHandlingKind;
    static Transactional: FailureHandlingKind;
    static Undo: FailureHandlingKind;
    static get(paramstringValue: string): FailureHandlingKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FailureHandlingKind;
    static values(): (Object | null)[];
    private constructor(stringValue: string)
    readonly stringValue: string;
    getStringValue(): string;
    name(): "Abort" | "Transactional" | "TextOnlyTransactional" | "Undo";
}
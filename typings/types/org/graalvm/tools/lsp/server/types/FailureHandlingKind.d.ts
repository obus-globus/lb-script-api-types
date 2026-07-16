import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class FailureHandlingKind extends Enum<FailureHandlingKind> {
    static Abort: FailureHandlingKind;
    static TextOnlyTransactional: FailureHandlingKind;
    static Transactional: FailureHandlingKind;
    static Undo: FailureHandlingKind;
    static get(paramstringValue: string): FailureHandlingKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FailureHandlingKind;
    static values(): FailureHandlingKind[];
    private constructor(stringValue: string)
    readonly stringValue: string;
    getStringValue(): string;
    name(): "Abort" | "Transactional" | "TextOnlyTransactional" | "Undo";
}
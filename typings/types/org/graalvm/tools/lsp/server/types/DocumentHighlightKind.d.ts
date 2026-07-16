import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DocumentHighlightKind extends Enum<DocumentHighlightKind> {
    static Read: DocumentHighlightKind;
    static Text: DocumentHighlightKind;
    static Write: DocumentHighlightKind;
    static get(paramintValue: number): DocumentHighlightKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DocumentHighlightKind;
    static values(): DocumentHighlightKind[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Text" | "Read" | "Write";
}
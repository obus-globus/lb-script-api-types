import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DocumentHighlightKind extends Enum<DocumentHighlightKind> {
    static Read: DocumentHighlightKind;
    static Text: DocumentHighlightKind;
    static Write: DocumentHighlightKind;
    static get(paramintValue: number): DocumentHighlightKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DocumentHighlightKind;
    static values(): (Object | null)[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Text" | "Read" | "Write";
}
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MarkupKind extends Enum<MarkupKind> {
    static Markdown: MarkupKind;
    static PlainText: MarkupKind;
    static get(paramstringValue: string): MarkupKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MarkupKind;
    static values(): MarkupKind[];
    private constructor(stringValue: string)
    readonly stringValue: string;
    getStringValue(): string;
    name(): "PlainText" | "Markdown";
}
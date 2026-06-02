import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CompletionItemKind extends Enum<CompletionItemKind> {
    static Class: CompletionItemKind;
    static Color: CompletionItemKind;
    static Constant: CompletionItemKind;
    static Constructor: CompletionItemKind;
    static Enum: CompletionItemKind;
    static EnumMember: CompletionItemKind;
    static Event: CompletionItemKind;
    static Field: CompletionItemKind;
    static File: CompletionItemKind;
    static Folder: CompletionItemKind;
    static Function: CompletionItemKind;
    static Interface: CompletionItemKind;
    static Keyword: CompletionItemKind;
    static Method: CompletionItemKind;
    static Module: CompletionItemKind;
    static Operator: CompletionItemKind;
    static Property: CompletionItemKind;
    static Reference: CompletionItemKind;
    static Snippet: CompletionItemKind;
    static Struct: CompletionItemKind;
    static Text: CompletionItemKind;
    static TypeParameter: CompletionItemKind;
    static Unit: CompletionItemKind;
    static Value: CompletionItemKind;
    static Variable: CompletionItemKind;
    static get(paramintValue: number): CompletionItemKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CompletionItemKind;
    static values(): (Object | null)[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Text" | "Method" | "Function" | "Constructor" | "Field" | "Variable" | "Class" | "Interface" | "Module" | "Property" | "Unit" | "Value" | "Enum" | "Keyword" | "Snippet" | "Color" | "File" | "Reference" | "Folder" | "EnumMember" | "Constant" | "Struct" | "Event" | "Operator" | "TypeParameter";
}
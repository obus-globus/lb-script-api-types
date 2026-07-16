import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class InsertTextFormat extends Enum<InsertTextFormat> {
    static PlainText: InsertTextFormat;
    static Snippet: InsertTextFormat;
    static get(paramintValue: number): InsertTextFormat;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): InsertTextFormat;
    static values(): InsertTextFormat[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "PlainText" | "Snippet";
}
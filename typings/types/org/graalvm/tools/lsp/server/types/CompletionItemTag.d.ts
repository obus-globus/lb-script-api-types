import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CompletionItemTag extends Enum<CompletionItemTag> {
    static Deprecated: CompletionItemTag;
    static get(paramintValue: number): CompletionItemTag;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CompletionItemTag;
    static values(): CompletionItemTag[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Deprecated";
}
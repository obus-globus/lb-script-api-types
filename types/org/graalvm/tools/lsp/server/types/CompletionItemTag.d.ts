import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CompletionItemTag extends Enum<CompletionItemTag> {
    static Deprecated: CompletionItemTag;
    static get(paramintValue: number): CompletionItemTag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CompletionItemTag;
    static values(): (Object | null)[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Deprecated";
}
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CompletionTriggerKind extends Enum<CompletionTriggerKind> {
    static Invoked: CompletionTriggerKind;
    static TriggerCharacter: CompletionTriggerKind;
    static TriggerForIncompleteCompletions: CompletionTriggerKind;
    static get(paramintValue: number): CompletionTriggerKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CompletionTriggerKind;
    static values(): CompletionTriggerKind[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Invoked" | "TriggerCharacter" | "TriggerForIncompleteCompletions";
}
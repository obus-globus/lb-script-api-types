import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CompletionRequestHandler$CompletionKind extends Enum<CompletionRequestHandler$CompletionKind> {
    static GLOBALS_AND_LOCALS: CompletionRequestHandler$CompletionKind;
    static OBJECT_PROPERTY: CompletionRequestHandler$CompletionKind;
    static UNKOWN: CompletionRequestHandler$CompletionKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CompletionRequestHandler$CompletionKind;
    static values(): CompletionRequestHandler$CompletionKind[];
    private constructor()
    name(): "UNKOWN" | "OBJECT_PROPERTY" | "GLOBALS_AND_LOCALS";
}
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SignatureHelpTriggerKind extends Enum<SignatureHelpTriggerKind> {
    static ContentChange: SignatureHelpTriggerKind;
    static Invoked: SignatureHelpTriggerKind;
    static TriggerCharacter: SignatureHelpTriggerKind;
    static get(paramintValue: number): SignatureHelpTriggerKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SignatureHelpTriggerKind;
    static values(): (Object | null)[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Invoked" | "TriggerCharacter" | "ContentChange";
}
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SignatureHelpTriggerKind extends Enum<SignatureHelpTriggerKind> {
    static ContentChange: SignatureHelpTriggerKind;
    static Invoked: SignatureHelpTriggerKind;
    static TriggerCharacter: SignatureHelpTriggerKind;
    static get(paramintValue: number): SignatureHelpTriggerKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SignatureHelpTriggerKind;
    static values(): SignatureHelpTriggerKind[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Invoked" | "TriggerCharacter" | "ContentChange";
}
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MemberReferenceTree$ReferenceMode extends Enum<MemberReferenceTree$ReferenceMode> {
    static INVOKE: MemberReferenceTree$ReferenceMode;
    static NEW: MemberReferenceTree$ReferenceMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MemberReferenceTree$ReferenceMode;
    static values(): MemberReferenceTree$ReferenceMode[];
    private constructor()
    name(): "INVOKE" | "NEW";
}
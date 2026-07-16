import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CallableMemberDescriptor$Kind extends Enum<CallableMemberDescriptor$Kind> {
    static DECLARATION: CallableMemberDescriptor$Kind;
    static DELEGATION: CallableMemberDescriptor$Kind;
    static FAKE_OVERRIDE: CallableMemberDescriptor$Kind;
    static SYNTHESIZED: CallableMemberDescriptor$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CallableMemberDescriptor$Kind;
    static values(): CallableMemberDescriptor$Kind[];
    private constructor()
    isReal(): boolean;
    name(): "DECLARATION" | "FAKE_OVERRIDE" | "DELEGATION" | "SYNTHESIZED";
}
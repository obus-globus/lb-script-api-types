import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class JavaMethodDescriptor$ParameterNamesStatus extends Enum<JavaMethodDescriptor$ParameterNamesStatus> {
    static NON_STABLE_DECLARED: JavaMethodDescriptor$ParameterNamesStatus;
    static NON_STABLE_SYNTHESIZED: JavaMethodDescriptor$ParameterNamesStatus;
    static STABLE_DECLARED: JavaMethodDescriptor$ParameterNamesStatus;
    static STABLE_SYNTHESIZED: JavaMethodDescriptor$ParameterNamesStatus;
    static get(paramarg0: boolean, paramarg1: boolean): JavaMethodDescriptor$ParameterNamesStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): JavaMethodDescriptor$ParameterNamesStatus;
    static values(): (Object | null)[];
    private constructor(arg2: boolean, arg3: boolean)
    isStable: boolean;
    isSynthesized: boolean;
    name(): "NON_STABLE_DECLARED" | "STABLE_DECLARED" | "NON_STABLE_SYNTHESIZED" | "STABLE_SYNTHESIZED";
}
import type { LambdaForm$BasicType } from '../../../java/lang/invoke/LambdaForm$BasicType.d.ts'
import type { LambdaForm$Kind } from '../../../java/lang/invoke/LambdaForm$Kind.d.ts'
import type { LambdaForm$Name } from '../../../java/lang/invoke/LambdaForm$Name.d.ts'
import type { LambdaFormEditor } from '../../../java/lang/invoke/LambdaFormEditor.d.ts'
import type { MemberName } from '../../../java/lang/invoke/MemberName.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LambdaForm extends Object {
    static LAST_RESULT: number;
    static VOID_RESULT: number;
    static basicTypeSignature(paramarg0: MethodType): string;
    static shortenSignature(paramarg0: string): string;
    private constructor(arg0: number, arg1: number, arg2: boolean, arg3: MethodHandle, arg4: LambdaForm$Name[], arg5: LambdaForm$Kind)
    // private arity: number;
    // private customized: MethodHandle;
    // private forceInline: boolean;
    // private invocationCounter: number;
    // private isCompiled: boolean;
    // private kind: LambdaForm$Kind;
    // private names: LambdaForm$Name[];
    // private result: number;
    // private transformCache: Object;
    // private vmentry: MemberName;
    arity(): number;
    // private arityCheck(arg0: Object[]): boolean;
    basicTypeSignature(): string;
    // private checkInvocationCounter(): void;
    compileToBytecode(): void;
    contains(arg0: LambdaForm$Name): boolean;
    customize(arg0: MethodHandle): LambdaForm;
    debugString(arg0: number): string;
    editor(): LambdaFormEditor;
    equals(arg0: LambdaForm): boolean;
    equals(arg0: Object | null): boolean;
    expressionCount(): number;
    // private forceInterpretation(): boolean;
    // private generateDebugName(): string;
    hashCode(): number;
    interpretName(arg0: LambdaForm$Name, arg1: Object[]): Object;
    interpretWithArguments(arg0: Object[]): Object;
    interpretWithArgumentsTracing(arg0: Object[]): Object;
    isGuardWithCatch(arg0: number): boolean;
    isLoop(arg0: number): boolean;
    // private isMatchingIdiom(arg0: number, arg1: string, arg2: number): boolean;
    isSelectAlternative(arg0: number): boolean;
    isTableSwitch(arg0: number): boolean;
    isTryFinally(arg0: number): boolean;
    lambdaName(): string;
    lastUseIndex(arg0: LambdaForm$Name): number;
    methodType(): MethodType;
    nameRefsAreLegal(): boolean;
    parameter(arg0: number): LambdaForm$Name;
    parameterConstraint(arg0: number): Object;
    parameterType(arg0: number): LambdaForm$BasicType;
    prepare(): void;
    // private resultCheck(arg0: Object[], arg1: Object): boolean;
    returnType(): LambdaForm$BasicType;
    toString(): string;
    uncustomize(): LambdaForm;
    useCount(arg0: LambdaForm$Name): number;
}
import type { Class } from '../../../java/lang/Class.d.ts'
import type { LambdaForm$BasicType } from '../../../java/lang/invoke/LambdaForm$BasicType.d.ts'
import type { LambdaForm$NamedFunction } from '../../../java/lang/invoke/LambdaForm$NamedFunction.d.ts'
import type { MemberName } from '../../../java/lang/invoke/MemberName.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LambdaForm$Name extends Object {
    constructor(arg0: LambdaForm$BasicType)
    constructor(arg0: LambdaForm$NamedFunction)
    constructor(arg0: LambdaForm$NamedFunction, arg1: Object)
    constructor(arg0: LambdaForm$NamedFunction, arg1: Object, arg2: Object)
    constructor(arg0: LambdaForm$NamedFunction, arg1: Object[])
    constructor(arg0: MemberName, arg1: Object[])
    constructor(arg0: MethodHandle, arg1: Object[])
    constructor(arg0: MethodType, arg1: Object[])
    constructor(arg0: number, arg1: LambdaForm$BasicType)
    private constructor(arg0: number, arg1: LambdaForm$BasicType, arg2: LambdaForm$NamedFunction, arg3: Object[], arg4: Object)
    // private arguments: Object[];
    // private constraint: Object;
    // private function: LambdaForm$NamedFunction;
    // private index: number;
    // private type: LambdaForm$BasicType;
    debugString(): string;
    equals(arg0: LambdaForm$Name): boolean;
    equals(arg0: Object | null): boolean;
    exprString(): string;
    hashCode(): number;
    index(): number;
    internArguments(): void;
    isInvokeBasic(): boolean;
    isLinkerMethodInvoke(): boolean;
    isParam(): boolean;
    lastUseIndex(arg0: LambdaForm$Name): number;
    paramString(): string;
    refersTo(arg0: Class<Object>, arg1: string): boolean;
    replaceName(arg0: LambdaForm$Name, arg1: LambdaForm$Name): LambdaForm$Name;
    replaceNames(arg0: LambdaForm$Name[], arg1: LambdaForm$Name[], arg2: number, arg3: number): LambdaForm$Name;
    toString(): string;
    type(): LambdaForm$BasicType;
    typeChar(): string;
    // private typesMatch(arg0: LambdaForm$NamedFunction, arg1: Object[]): boolean;
    withConstraint(arg0: Object): LambdaForm$Name;
    withIndex(arg0: number): LambdaForm$Name;
}
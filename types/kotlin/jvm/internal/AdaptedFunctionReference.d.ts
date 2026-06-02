import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FunctionBase } from '../../../kotlin/jvm/internal/FunctionBase.d.ts'
import type { KDeclarationContainer } from '../../../kotlin/reflect/KDeclarationContainer.d.ts'
export class AdaptedFunctionReference extends Object implements Serializable, FunctionBase<Object> {
    constructor(arg0: number, arg1: Class<Object>, arg2: string, arg3: string, arg4: number)
    constructor(arg0: number, arg1: Object, arg2: Class<Object>, arg3: string, arg4: string, arg5: number)
    readonly arity: number;
    readonly arity: number;
    // private flags: number;
    // private isTopLevel: boolean;
    // private name: string;
    readonly owner: Class<Object>;
    // private receiver: Object;
    // private signature: string;
    equals(arg0: Object | null): boolean;
    getOwner(): KDeclarationContainer;
    hashCode(): number;
    toString(): string;
}
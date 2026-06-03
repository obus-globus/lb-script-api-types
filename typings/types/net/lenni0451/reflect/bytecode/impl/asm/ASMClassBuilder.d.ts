import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassBuilder } from '../../../../../../net/lenni0451/reflect/bytecode/builder/ClassBuilder.d.ts'
import type { FieldBuilder } from '../../../../../../net/lenni0451/reflect/bytecode/builder/FieldBuilder.d.ts'
import type { MethodBuilder } from '../../../../../../net/lenni0451/reflect/bytecode/builder/MethodBuilder.d.ts'
export class ASMClassBuilder extends Object implements ClassBuilder {
    constructor(arg0: (param0: string) => kotlin.Int, arg1: Object, arg2: string)
    readonly classWriter: Object;
    readonly name: string;
    // private opcodeResolver: (param0: string) => kotlin.Int;
    field(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): void;
    field(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): void;
    field(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object, arg5: (param0: FieldBuilder) => void): void;
    getClassWriter(): Object;
    getName(): string;
    method(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[], arg5: (param0: MethodBuilder) => void): void;
}
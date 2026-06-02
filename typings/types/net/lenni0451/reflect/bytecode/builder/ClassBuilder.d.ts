import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FieldBuilder } from '../../../../../net/lenni0451/reflect/bytecode/builder/FieldBuilder.d.ts'
import type { MethodBuilder } from '../../../../../net/lenni0451/reflect/bytecode/builder/MethodBuilder.d.ts'
export interface ClassBuilder extends Object{
    field(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): void;
    field(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object, arg5: (param0: FieldBuilder) => void): void;
    getName(): string;
    method(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[], arg5: (param0: MethodBuilder) => void): void;
}
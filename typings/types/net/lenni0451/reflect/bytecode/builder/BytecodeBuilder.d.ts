import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassBuilder } from '../../../../../net/lenni0451/reflect/bytecode/builder/ClassBuilder.d.ts'
import type { BuiltClass } from '../../../../../net/lenni0451/reflect/bytecode/wrapper/BuiltClass.d.ts'
import type { BytecodeType } from '../../../../../net/lenni0451/reflect/bytecode/wrapper/BytecodeType.d.ts'
export interface BytecodeBuilder extends Object{
    class_(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[], arg5: (param0: ClassBuilder) => void): BuiltClass;
    opcode(arg0: string): number;
    opcode(arg0: string, arg1: string[]): number;
    type(arg0: string): BytecodeType;
}
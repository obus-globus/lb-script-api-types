import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BytecodeBuilder } from '../../../../../../net/lenni0451/reflect/bytecode/builder/BytecodeBuilder.d.ts'
import type { ClassBuilder } from '../../../../../../net/lenni0451/reflect/bytecode/builder/ClassBuilder.d.ts'
import type { BuiltClass } from '../../../../../../net/lenni0451/reflect/bytecode/wrapper/BuiltClass.d.ts'
import type { BytecodeType } from '../../../../../../net/lenni0451/reflect/bytecode/wrapper/BytecodeType.d.ts'
export class ASMBuilder extends Object implements BytecodeBuilder {
    static CLASS_ClassWriter: Class<Object>;
    static CLASS_FieldVisitor: Class<Object>;
    static CLASS_Label: Class<Object>;
    static CLASS_MethodVisitor: Class<Object>;
    static CLASS_Opcodes: Class<Object>;
    static CLASS_type: Class<Object>;
    static get(): BytecodeBuilder;
    constructor()
    class_(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[], arg5: (param0: ClassBuilder) => void): BuiltClass;
    opcode(arg0: string, arg1: string[]): number;
    opcode(arg0: string): number;
    type(arg0: string): BytecodeType;
}
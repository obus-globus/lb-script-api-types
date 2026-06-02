import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Handle } from '../../../../org/objectweb/asm/Handle.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { LabelNode } from '../../../../org/objectweb/asm/tree/LabelNode.d.ts'
import type { MethodInsnNode } from '../../../../org/objectweb/asm/tree/MethodInsnNode.d.ts'
import type { MethodNode } from '../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { TypeInsnNode } from '../../../../org/objectweb/asm/tree/TypeInsnNode.d.ts'
export class ASMUtils extends Object {
    static LMF_HANDLE: Handle;
    static OBJECT_TYPE: Type;
    static annotationToString(paramarg0: AnnotationNode): string;
    static findInitNodeFor(paramarg0: AbstractInsnNode[], paramarg1: TypeInsnNode): MethodInsnNode;
    static getConstantType(paramarg0: AbstractInsnNode): Type;
    static getDummyOpcodeForType(paramarg0: Type): number;
    static getInvisibleMEAnnotation(paramarg0: MethodNode, paramarg1: Class<Object>): AnnotationNode;
    static getInvokeInstruction(paramarg0: ClassNode, paramarg1: MethodNode): MethodInsnNode;
    static getRepeatedMEAnnotation(paramarg0: MethodNode, paramarg1: Class<Object>): AnnotationNode;
    static ifElse(paramarg0: AbstractInsnNode[], paramarg1: number, paramarg2: () => void, paramarg3: () => void): void;
    static ifElse(paramarg0: AbstractInsnNode[], paramarg1: (param0: LabelNode) => void, paramarg2: () => void, paramarg3: () => void): void;
    static isPrimitive(paramarg0: Type): boolean;
    static typeToString(paramarg0: Type): string;
    constructor()
}
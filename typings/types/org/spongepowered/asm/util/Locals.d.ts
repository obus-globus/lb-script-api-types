import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { FrameNode } from '../../../../org/objectweb/asm/tree/FrameNode.d.ts'
import type { LocalVariableNode } from '../../../../org/objectweb/asm/tree/LocalVariableNode.d.ts'
import type { MethodNode } from '../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { Locals$Settings } from '../../../../org/spongepowered/asm/util/Locals$Settings.d.ts'
export class Locals extends Object {
    static computeFrameSize(paramarg0: FrameNode, paramarg1: number): number;
    static generateLocalVariableTable(paramarg0: ClassNode, paramarg1: MethodNode): LocalVariableNode[];
    static getFrameTypeName(paramarg0: Object): string;
    static getGeneratedLocalVariableTable(paramarg0: ClassNode, paramarg1: MethodNode): LocalVariableNode[];
    static getInitialMethodLocals(paramarg0: MethodNode, paramarg1: ClassNode, paramarg2: number): LocalVariableNode[];
    static getInitialMethodLocals(paramarg0: MethodNode, paramarg1: ClassNode, paramarg2: number, paramarg3: boolean): LocalVariableNode[];
    static getLocalVariableAt(paramarg0: ClassNode, paramarg1: MethodNode, paramarg2: AbstractInsnNode, paramarg3: number): LocalVariableNode;
    static getLocalVariableTable(paramarg0: ClassNode, paramarg1: MethodNode): LocalVariableNode[];
    static getLocalsAt(paramarg0: ClassNode, paramarg1: MethodNode, paramarg2: AbstractInsnNode, paramarg3: number): LocalVariableNode[];
    static getLocalsAt(paramarg0: ClassNode, paramarg1: MethodNode, paramarg2: AbstractInsnNode, paramarg3: Locals$Settings): LocalVariableNode[];
    static loadLocals(paramarg0: Type[], paramarg1: AbstractInsnNode[], paramarg2: number, paramarg3: number): void;
    private constructor()
}
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../../java/util/ListIterator.d.ts'
import type { FabricLauncher } from '../../../../../../net/fabricmc/loader/impl/launch/FabricLauncher.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { FieldNode } from '../../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export abstract class GamePatch extends Object {
    constructor()
    findField(arg0: ClassNode, arg1: (param0: FieldNode) => kotlin.Boolean): FieldNode;
    findFields(arg0: ClassNode, arg1: (param0: FieldNode) => kotlin.Boolean): FieldNode[];
    findInsn(arg0: MethodNode, arg1: (param0: AbstractInsnNode) => kotlin.Boolean, arg2: boolean): AbstractInsnNode;
    findMethod(arg0: ClassNode, arg1: (param0: MethodNode) => kotlin.Boolean): MethodNode;
    isPublicInstance(arg0: number): boolean;
    isPublicStatic(arg0: number): boolean;
    isStatic(arg0: number): boolean;
    moveAfter(arg0: ListIterator<AbstractInsnNode>, arg1: number): void;
    moveAfter(arg0: ListIterator<AbstractInsnNode>, arg1: AbstractInsnNode): void;
    moveBefore(arg0: ListIterator<AbstractInsnNode>, arg1: number): void;
    moveBefore(arg0: ListIterator<AbstractInsnNode>, arg1: AbstractInsnNode): void;
    moveBeforeType(arg0: ListIterator<AbstractInsnNode>, arg1: number): void;
    process(arg0: FabricLauncher, arg1: (param0: string) => ClassNode, arg2: (param0: ClassNode) => void): void;
}
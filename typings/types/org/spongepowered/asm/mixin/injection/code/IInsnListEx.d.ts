import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { IInsnListEx$SpecialNodeType } from '../../../../../../org/spongepowered/asm/mixin/injection/code/IInsnListEx$SpecialNodeType.d.ts'
export interface IInsnListEx extends Object{
    getDecoration<V extends unknown>(arg0: string): V;
    getDecoration<V extends unknown>(arg0: string, arg1: V): V;
    getSpecialNode(arg0: IInsnListEx$SpecialNodeType): AbstractInsnNode;
    getTargetAccess(): number;
    getTargetDesc(): string;
    getTargetName(): string;
    getTargetSignature(): string;
    hasDecoration(arg0: string): boolean;
    isTargetConstructor(): boolean;
    isTargetStatic(): boolean;
    isTargetStaticInitialiser(): boolean;
}
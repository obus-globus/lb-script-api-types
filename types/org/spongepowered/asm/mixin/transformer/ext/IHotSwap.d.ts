import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
export interface IHotSwap extends Object{
    registerMixinClass(arg0: string): void;
    registerTargetClass(arg0: string, arg1: ClassNode): void;
}
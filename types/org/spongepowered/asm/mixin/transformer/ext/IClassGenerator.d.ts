import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
export interface IClassGenerator extends Object{
    generate(arg0: string, arg1: ClassNode): boolean;
    getName(): string;
}
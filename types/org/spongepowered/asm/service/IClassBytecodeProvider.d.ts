import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
export interface IClassBytecodeProvider extends Object{
    getClassNode(arg0: string): ClassNode;
    getClassNode(arg0: string, arg1: boolean): ClassNode;
    getClassNode(arg0: string, arg1: boolean, arg2: number): ClassNode;
}
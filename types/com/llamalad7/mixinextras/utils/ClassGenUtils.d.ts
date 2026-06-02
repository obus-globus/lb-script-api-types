import type { MethodHandles$Lookup } from '../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
export class ClassGenUtils extends Object {
    static defineClass(paramarg0: ClassNode, paramarg1: MethodHandles$Lookup): void;
    static getDefinitions(): { [key: string]: number[] };
    constructor()
}
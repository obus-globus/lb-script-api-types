import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassVisitor } from '../../../../org/objectweb/asm/ClassVisitor.d.ts'
export class InnerClassNode extends Object {
    constructor(arg0: string, arg1: string, arg2: string, arg3: number)
    access: number;
    innerName: string;
    name: string;
    outerName: string;
    accept(arg0: ClassVisitor): void;
}
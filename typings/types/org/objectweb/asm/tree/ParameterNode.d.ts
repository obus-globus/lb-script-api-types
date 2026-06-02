import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class ParameterNode extends Object {
    constructor(arg0: string, arg1: number)
    access: number;
    name: string;
    accept(arg0: MethodVisitor): void;
}
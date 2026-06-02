import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ParameterNode extends Object {
    constructor(name: string, access: number)
    access: number;
    name: string;
    accept(methodVisitor: MethodVisitor): void;
}
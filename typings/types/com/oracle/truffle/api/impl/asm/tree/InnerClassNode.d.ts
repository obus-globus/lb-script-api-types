import type { ClassVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassVisitor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class InnerClassNode extends Object {
    constructor(name: string, outerName: string, innerName: string, access: number)
    access: number;
    innerName: string;
    name: string;
    outerName: string;
    accept(classVisitor: ClassVisitor): void;
}
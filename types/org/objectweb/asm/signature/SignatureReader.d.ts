import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SignatureVisitor } from '../../../../org/objectweb/asm/signature/SignatureVisitor.d.ts'
export class SignatureReader extends Object {
    constructor(arg0: string)
    // private signatureValue: string;
    accept(arg0: SignatureVisitor): void;
    acceptType(arg0: SignatureVisitor): void;
}
import type { SignatureVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/signature/SignatureVisitor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SignatureReader extends Object {
    constructor(signature: string)
    // private signatureValue: string;
    accept(signatureVistor: SignatureVisitor): void;
    acceptType(signatureVisitor: SignatureVisitor): void;
}
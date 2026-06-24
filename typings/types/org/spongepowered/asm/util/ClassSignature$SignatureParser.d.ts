import type { SignatureVisitor } from '../../../../org/objectweb/asm/signature/SignatureVisitor.d.ts'
import type { ClassSignature } from '../../../../org/spongepowered/asm/util/ClassSignature.d.ts'
import type { ClassSignature$SignatureParser$FormalParamElement } from '../../../../org/spongepowered/asm/util/ClassSignature$SignatureParser$FormalParamElement.d.ts'
export class ClassSignature$SignatureParser extends SignatureVisitor {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    constructor(null_: ClassSignature)
    // private param: ClassSignature$SignatureParser$FormalParamElement;
    visitClassBound(): SignatureVisitor;
    visitFormalTypeParameter(arg0: string): void;
    visitInterface(): SignatureVisitor;
    visitInterfaceBound(): SignatureVisitor;
    visitSuperclass(): SignatureVisitor;
}
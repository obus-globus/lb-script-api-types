import type { Remapper } from '../../../../org/objectweb/asm/commons/Remapper.d.ts'
import type { SignatureVisitor } from '../../../../org/objectweb/asm/signature/SignatureVisitor.d.ts'
export class SignatureRemapper extends SignatureVisitor {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    constructor(arg0: number, arg1: SignatureVisitor, arg2: Remapper)
    constructor(arg0: SignatureVisitor, arg1: Remapper)
    // private classNames: string[];
    // private remapper: Remapper;
    // private signatureVisitor: SignatureVisitor;
    visitArrayType(): SignatureVisitor;
    visitBaseType(arg0: string): void;
    visitClassBound(): SignatureVisitor;
    visitClassType(arg0: string): void;
    visitEnd(): void;
    visitExceptionType(): SignatureVisitor;
    visitFormalTypeParameter(arg0: string): void;
    visitInnerClassType(arg0: string): void;
    visitInterface(): SignatureVisitor;
    visitInterfaceBound(): SignatureVisitor;
    visitParameterType(): SignatureVisitor;
    visitReturnType(): SignatureVisitor;
    visitSuperclass(): SignatureVisitor;
    visitTypeArgument(): void;
    visitTypeArgument(arg0: string): SignatureVisitor;
    visitTypeVariable(arg0: string): void;
}
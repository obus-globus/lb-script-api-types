import type { Remapper } from '../../../../../../../com/oracle/truffle/api/impl/asm/commons/Remapper.d.ts'
import type { SignatureVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/signature/SignatureVisitor.d.ts'
export class SignatureRemapper extends SignatureVisitor {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    constructor(signatureVisitor: SignatureVisitor, remapper: Remapper)
    constructor(api: number, signatureVisitor: SignatureVisitor, remapper: Remapper)
    // private classNames: string[];
    // private remapper: Remapper;
    // private signatureVisitor: SignatureVisitor;
    visitArrayType(): SignatureVisitor;
    visitBaseType(descriptor: string): void;
    visitClassBound(): SignatureVisitor;
    visitClassType(name: string): void;
    visitEnd(): void;
    visitExceptionType(): SignatureVisitor;
    visitFormalTypeParameter(name: string): void;
    visitInnerClassType(name: string): void;
    visitInterface(): SignatureVisitor;
    visitInterfaceBound(): SignatureVisitor;
    visitParameterType(): SignatureVisitor;
    visitReturnType(): SignatureVisitor;
    visitSuperclass(): SignatureVisitor;
    visitTypeArgument(): void;
    visitTypeArgument(wildcard: string): SignatureVisitor;
    visitTypeVariable(name: string): void;
}
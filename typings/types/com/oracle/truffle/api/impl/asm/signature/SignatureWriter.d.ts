import type { SignatureVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/signature/SignatureVisitor.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
export class SignatureWriter extends SignatureVisitor {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    constructor()
    private constructor(stringBuilder: StringBuilder)
    // private argumentStack: number;
    // private hasFormals: boolean;
    // private hasParameters: boolean;
    // private stringBuilder: StringBuilder;
    // private endArguments(): void;
    // private endFormals(): void;
    toString(): string;
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
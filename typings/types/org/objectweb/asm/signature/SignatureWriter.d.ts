import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { SignatureVisitor } from '../../../../org/objectweb/asm/signature/SignatureVisitor.d.ts'
export class SignatureWriter extends SignatureVisitor {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    constructor()
    private constructor(arg0: StringBuilder)
    // private argumentStack: number;
    // private hasFormals: boolean;
    // private hasParameters: boolean;
    // private stringBuilder: StringBuilder;
    // private endArguments(): void;
    // private endFormals(): void;
    toString(): string;
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
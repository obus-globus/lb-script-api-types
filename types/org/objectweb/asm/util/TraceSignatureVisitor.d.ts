import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { SignatureVisitor } from '../../../../org/objectweb/asm/signature/SignatureVisitor.d.ts'
export class TraceSignatureVisitor extends SignatureVisitor {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    private constructor(arg0: StringBuilder)
    constructor(arg0: number)
    // private argumentStack: number;
    // private arrayStack: number;
    readonly declaration: StringBuilder;
    readonly exceptions: StringBuilder;
    // private formalTypeParameterVisited: boolean;
    // private interfaceBoundVisited: boolean;
    // private interfaceVisited: boolean;
    // private isInterface: boolean;
    // private parameterTypeVisited: boolean;
    readonly returnType: StringBuilder;
    // private separator: string;
    // private endFormals(): void;
    // private endType(): void;
    getDeclaration(): string;
    getExceptions(): string;
    getReturnType(): string;
    // private startType(): void;
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
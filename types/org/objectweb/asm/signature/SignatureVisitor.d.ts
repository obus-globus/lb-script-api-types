import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class SignatureVisitor extends Object {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    constructor(arg0: number)
    // private api: number;
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
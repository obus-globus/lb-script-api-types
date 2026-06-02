import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class SignatureVisitor extends Object {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    constructor(api: number)
    // private api: number;
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
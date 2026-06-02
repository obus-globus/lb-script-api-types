import type { SignatureVisitor } from '../../../../org/objectweb/asm/signature/SignatureVisitor.d.ts'
import type { CheckSignatureAdapter$State } from '../../../../org/objectweb/asm/util/CheckSignatureAdapter$State.d.ts'
export class CheckSignatureAdapter extends SignatureVisitor {
    static CLASS_SIGNATURE: number;
    static EXTENDS: string;
    static INSTANCEOF: string;
    static METHOD_SIGNATURE: number;
    static SUPER: string;
    static TYPE_SIGNATURE: number;
    constructor(arg0: number, arg1: number, arg2: SignatureVisitor)
    constructor(arg0: number, arg1: SignatureVisitor)
    // private canBeVoid: boolean;
    // private signatureVisitor: SignatureVisitor;
    // private state: CheckSignatureAdapter$State;
    // private type: number;
    // private checkClassName(arg0: string, arg1: string): void;
    // private checkIdentifier(arg0: string, arg1: string): void;
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
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { SignatureVisitor } from '../../../../org/objectweb/asm/signature/SignatureVisitor.d.ts'
import type { TraceSignatureVisitor$Task } from '../../../../org/objectweb/asm/util/TraceSignatureVisitor$Task.d.ts'
export class TraceSignatureVisitor extends SignatureVisitor {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    private constructor(arg0: StringBuilder)
    constructor(arg0: number)
    readonly declaration: StringBuilder;
    readonly exceptions: StringBuilder;
    // private formalTypeParameterVisited: boolean;
    // private interfaceBoundVisited: boolean;
    // private interfaceVisited: boolean;
    // private isInterface: boolean;
    // private parameterTypeVisited: boolean;
    // private pendingTasks: TraceSignatureVisitor$Task[];
    readonly returnType: StringBuilder;
    // private separator: string;
    // private endFormals(): void;
    // private endType(): void;
    // private endTypeArguments(): void;
    getDeclaration(): string;
    getExceptions(): string;
    getReturnType(): string;
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
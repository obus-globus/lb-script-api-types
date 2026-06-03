import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { SignatureVisitor } from '../../../../../../../org/objectweb/asm/signature/SignatureVisitor.d.ts'
export class InjectedInterfaceImpl$RawTypeFromSignatureVisitor extends SignatureVisitor {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    constructor()
    // private rawType: StringBuilder;
    visitClassType(arg0: string): void;
    visitInnerClassType(arg0: string): void;
    visitTypeArgument(): void;
    visitTypeArgument(arg0: string): SignatureVisitor;
}
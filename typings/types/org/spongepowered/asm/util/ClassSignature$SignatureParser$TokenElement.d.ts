import type { SignatureVisitor } from '../../../../org/objectweb/asm/signature/SignatureVisitor.d.ts'
import type { ClassSignature$IToken } from '../../../../org/spongepowered/asm/util/ClassSignature$IToken.d.ts'
import type { ClassSignature$SignatureParser$SignatureElement } from '../../../../org/spongepowered/asm/util/ClassSignature$SignatureParser$SignatureElement.d.ts'
import type { ClassSignature$Token } from '../../../../org/spongepowered/asm/util/ClassSignature$Token.d.ts'
import type { ClassSignature$TokenHandle } from '../../../../org/spongepowered/asm/util/ClassSignature$TokenHandle.d.ts'
export abstract class ClassSignature$SignatureParser$TokenElement extends ClassSignature$SignatureParser$SignatureElement {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    constructor(null_: ClassSignature$SignatureParser$TokenElement)
    // private array: boolean;
    token: ClassSignature$Token;
    addTypeArgument(arg0: string): ClassSignature$IToken;
    addTypeArgument(arg0: string): ClassSignature$IToken;
    addTypeArgument(arg0: ClassSignature$TokenHandle): ClassSignature$IToken;
    // private getArray(): boolean;
    getToken(): ClassSignature$Token;
    setArray(): void;
    visitArrayType(): SignatureVisitor;
    visitClassBound(): SignatureVisitor;
    visitClassType(arg0: string): void;
    visitInnerClassType(arg0: string): void;
    visitInterfaceBound(): SignatureVisitor;
    visitTypeArgument(arg0: string): SignatureVisitor;
}
import type { SignatureWriter } from '../../../../org/objectweb/asm/signature/SignatureWriter.d.ts'
import type { ClassSignature } from '../../../../org/spongepowered/asm/util/ClassSignature.d.ts'
export class ClassSignature$SignatureRemapper extends SignatureWriter {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    constructor(null_: ClassSignature)
    // private localTypeVars: string[];
    visitFormalTypeParameter(arg0: string): void;
    visitTypeVariable(arg0: string): void;
}
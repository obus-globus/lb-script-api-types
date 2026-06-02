import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { SignatureVisitor } from '../../../../org/objectweb/asm/signature/SignatureVisitor.d.ts'
export class GenericParamParser extends SignatureVisitor {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    static getParameterGenerics(paramarg0: string, paramarg1: string): Type[];
    private constructor()
    // private results: Type[];
    visitParameterType(): SignatureVisitor;
}
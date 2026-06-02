import type { InjectedInterface } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/InjectedInterface.d.ts'
import type { SignatureVisitor } from '../../../../../../../org/objectweb/asm/signature/SignatureVisitor.d.ts'
export class InterfaceInjectionClassVisitor$GenericsChecker extends SignatureVisitor {
    static EXTENDS: string;
    static INSTANCEOF: string;
    static SUPER: string;
    constructor(arg0: number, arg1: string, arg2: InjectedInterface[])
    // private className: string;
    // private injectedInterfaces: InjectedInterface[];
    // private typeParameters: string[];
    check(): void;
    visitFormalTypeParameter(arg0: string): void;
}
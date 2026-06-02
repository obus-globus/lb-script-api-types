import type { ClassTweaker } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/ClassTweaker.d.ts'
import type { InjectedInterface } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/InjectedInterface.d.ts'
import type { ClassVisitor } from '../../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
export class InterfaceInjectionClassVisitor extends ClassVisitor {
    constructor(arg0: number, arg1: ClassVisitor, arg2: ClassTweaker)
    // private classTweaker: ClassTweaker;
    // private injectedInterfaces: InjectedInterface[];
    // private knownInnerClasses: string[];
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitEnd(): void;
    visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
}
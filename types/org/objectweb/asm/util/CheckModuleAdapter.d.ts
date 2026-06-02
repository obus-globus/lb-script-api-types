import type { ModuleVisitor } from '../../../../org/objectweb/asm/ModuleVisitor.d.ts'
import type { CheckModuleAdapter$NameSet } from '../../../../org/objectweb/asm/util/CheckModuleAdapter$NameSet.d.ts'
export class CheckModuleAdapter extends ModuleVisitor {
    constructor(arg0: number, arg1: ModuleVisitor, arg2: boolean)
    constructor(arg0: ModuleVisitor, arg1: boolean)
    // private classVersion: number;
    // private exportedPackages: CheckModuleAdapter$NameSet;
    // private isOpen: boolean;
    // private openedPackages: CheckModuleAdapter$NameSet;
    // private providedServices: CheckModuleAdapter$NameSet;
    // private requiredModules: CheckModuleAdapter$NameSet;
    // private usedServices: CheckModuleAdapter$NameSet;
    // private visitEndCalled: boolean;
    // private checkVisitEndNotCalled(): void;
    visitEnd(): void;
    visitExport(arg0: string, arg1: number, arg2: string[]): void;
    visitMainClass(arg0: string): void;
    visitOpen(arg0: string, arg1: number, arg2: string[]): void;
    visitPackage(arg0: string): void;
    visitProvide(arg0: string, arg1: string[]): void;
    visitRequire(arg0: string, arg1: number, arg2: string): void;
    visitUse(arg0: string): void;
}
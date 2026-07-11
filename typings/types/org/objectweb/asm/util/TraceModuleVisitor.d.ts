import type { ModuleVisitor } from '../../../../org/objectweb/asm/ModuleVisitor.d.ts'
import type { Printer } from '../../../../org/objectweb/asm/util/Printer.d.ts'
export class TraceModuleVisitor extends ModuleVisitor {
    constructor(arg0: ModuleVisitor, arg1: Printer)
    constructor(arg0: Printer)
    p: Printer;
    visitEnd(): void;
    visitExport(arg0: string, arg1: number, ...arg2: string[]): void;
    visitMainClass(arg0: string): void;
    visitOpen(arg0: string, arg1: number, ...arg2: string[]): void;
    visitPackage(arg0: string): void;
    visitProvide(arg0: string, ...arg1: string[]): void;
    visitRequire(arg0: string, arg1: number, arg2: string): void;
    visitUse(arg0: string): void;
}
import type { ModuleVisitor } from '../../../../org/objectweb/asm/ModuleVisitor.d.ts'
import type { Remapper } from '../../../../org/objectweb/asm/commons/Remapper.d.ts'
export class ModuleRemapper extends ModuleVisitor {
    constructor(arg0: number, arg1: ModuleVisitor, arg2: Remapper)
    constructor(arg0: ModuleVisitor, arg1: Remapper)
    // private remapper: Remapper;
    visitExport(arg0: string, arg1: number, ...arg2: string[]): void;
    visitMainClass(arg0: string): void;
    visitOpen(arg0: string, arg1: number, ...arg2: string[]): void;
    visitPackage(arg0: string): void;
    visitProvide(arg0: string, ...arg1: string[]): void;
    visitRequire(arg0: string, arg1: number, arg2: string): void;
    visitUse(arg0: string): void;
}
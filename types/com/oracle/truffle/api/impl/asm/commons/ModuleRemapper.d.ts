import type { ModuleVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ModuleVisitor.d.ts'
import type { Remapper } from '../../../../../../../com/oracle/truffle/api/impl/asm/commons/Remapper.d.ts'
export class ModuleRemapper extends ModuleVisitor {
    constructor(moduleVisitor: ModuleVisitor, remapper: Remapper)
    constructor(api: number, moduleVisitor: ModuleVisitor, remapper: Remapper)
    // private remapper: Remapper;
    visitExport(packaze: string, access: number, modules: string[]): void;
    visitMainClass(mainClass: string): void;
    visitOpen(packaze: string, access: number, modules: string[]): void;
    visitPackage(packaze: string): void;
    visitProvide(service: string, providers: string[]): void;
    visitRequire(module: string, access: number, version: string): void;
    visitUse(service: string): void;
}
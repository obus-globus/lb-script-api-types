import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ModuleVisitor extends Object {
    constructor(api: number)
    constructor(api: number, moduleVisitor: ModuleVisitor)
    // private api: number;
    // private mv: ModuleVisitor;
    getDelegate(): ModuleVisitor;
    visitEnd(): void;
    visitExport(packaze: string, access: number, ...modules: string[]): void;
    visitMainClass(mainClass: string): void;
    visitOpen(packaze: string, access: number, ...modules: string[]): void;
    visitPackage(packaze: string): void;
    visitProvide(service: string, ...providers: string[]): void;
    visitRequire(module: string, access: number, version: string): void;
    visitUse(service: string): void;
}
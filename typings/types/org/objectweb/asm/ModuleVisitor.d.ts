import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ModuleVisitor extends Object {
    constructor(arg0: number)
    constructor(arg0: number, arg1: ModuleVisitor)
    // private api: number;
    // private mv: ModuleVisitor;
    getDelegate(): ModuleVisitor;
    visitEnd(): void;
    visitExport(arg0: string, arg1: number, ...arg2: string[]): void;
    visitMainClass(arg0: string): void;
    visitOpen(arg0: string, arg1: number, ...arg2: string[]): void;
    visitPackage(arg0: string): void;
    visitProvide(arg0: string, ...arg1: string[]): void;
    visitRequire(arg0: string, arg1: number, arg2: string): void;
    visitUse(arg0: string): void;
}
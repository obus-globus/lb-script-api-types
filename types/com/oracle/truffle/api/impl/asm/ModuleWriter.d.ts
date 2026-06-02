import type { ByteVector } from '../../../../../../com/oracle/truffle/api/impl/asm/ByteVector.d.ts'
import type { ModuleVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/ModuleVisitor.d.ts'
import type { SymbolTable } from '../../../../../../com/oracle/truffle/api/impl/asm/SymbolTable.d.ts'
export class ModuleWriter extends ModuleVisitor {
    constructor(symbolTable: SymbolTable, name: number, access: number, version: number)
    // private exports: ByteVector;
    // private exportsCount: number;
    // private mainClassIndex: number;
    // private moduleFlags: number;
    // private moduleNameIndex: number;
    // private moduleVersionIndex: number;
    // private opens: ByteVector;
    // private opensCount: number;
    // private packageCount: number;
    // private packageIndex: ByteVector;
    // private provides: ByteVector;
    // private providesCount: number;
    // private requires: ByteVector;
    // private requiresCount: number;
    // private symbolTable: SymbolTable;
    // private usesCount: number;
    // private usesIndex: ByteVector;
    computeAttributesSize(): number;
    getAttributeCount(): number;
    putAttributes(output: ByteVector): void;
    visitEnd(): void;
    visitExport(packaze: string, access: number, modules: string[]): void;
    visitMainClass(mainClass: string): void;
    visitOpen(packaze: string, access: number, modules: string[]): void;
    visitPackage(packaze: string): void;
    visitProvide(service: string, providers: string[]): void;
    visitRequire(module: string, access: number, version: string): void;
    visitUse(service: string): void;
}
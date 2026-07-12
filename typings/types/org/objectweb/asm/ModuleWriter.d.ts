import type { ByteVector } from '../../../org/objectweb/asm/ByteVector.d.ts'
import type { ModuleVisitor } from '../../../org/objectweb/asm/ModuleVisitor.d.ts'
import type { SymbolTable } from '../../../org/objectweb/asm/SymbolTable.d.ts'
export class ModuleWriter extends ModuleVisitor {
    constructor(arg0: SymbolTable, arg1: number, arg2: number, arg3: number)
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
    putAttributes(arg0: ByteVector): void;
    visitEnd(): void;
    visitExport(arg0: string, arg1: number, ...arg2: string[]): void;
    visitMainClass(arg0: string): void;
    visitOpen(arg0: string, arg1: number, ...arg2: string[]): void;
    visitPackage(arg0: string): void;
    visitProvide(arg0: string, ...arg1: string[]): void;
    visitRequire(arg0: string, arg1: number, arg2: string): void;
    visitUse(arg0: string): void;
}
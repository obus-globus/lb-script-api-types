import type { Label } from '../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { MethodWriter } from '../../../../../../com/oracle/truffle/api/impl/asm/MethodWriter.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/api/impl/asm/Symbol.d.ts'
import type { SymbolTable } from '../../../../../../com/oracle/truffle/api/impl/asm/SymbolTable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Frame extends Object {
    constructor(owner: Label)
    // private initializationCount: number;
    // private initializations: number[];
    // private inputLocals: number[];
    // private inputStack: number[];
    // private outputLocals: number[];
    // private outputStack: number[];
    // private outputStackStart: number;
    // private outputStackTop: number;
    // private owner: Label;
    accept(methodWriter: MethodWriter): void;
    // private addInitializedType(abstractType: number): void;
    copyFrom(frame: Frame): void;
    execute(opcode: number, arg: number, argSymbol: Symbol, symbolTable: SymbolTable): void;
    // private getConcreteOutputType(abstractOutputType: number, numStack: number): number;
    // private getInitializedType(symbolTable: SymbolTable, abstractType: number): number;
    getInputStackSize(): number;
    // private getLocal(localIndex: number): number;
    merge(symbolTable: SymbolTable, dstFrame: Frame, catchTypeIndex: number): boolean;
    // private pop(): number;
    // private pop(elements: number): void;
    // private pop(descriptor: string): void;
    // private push(symbolTable: SymbolTable, descriptor: string): void;
    // private push(abstractType: number): void;
    setInputFrameFromApiFormat(symbolTable: SymbolTable, numLocal: number, local: Object[], numStack: number, stack: Object[]): void;
    setInputFrameFromDescriptor(symbolTable: SymbolTable, access: number, descriptor: string, maxLocals: number): void;
    // private setLocal(localIndex: number, abstractType: number): void;
}
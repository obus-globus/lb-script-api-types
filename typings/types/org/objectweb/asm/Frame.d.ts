import type { Object } from '../../../java/lang/Object.d.ts'
import type { Label } from '../../../org/objectweb/asm/Label.d.ts'
import type { MethodWriter } from '../../../org/objectweb/asm/MethodWriter.d.ts'
import type { Symbol } from '../../../org/objectweb/asm/Symbol.d.ts'
import type { SymbolTable } from '../../../org/objectweb/asm/SymbolTable.d.ts'
export class Frame extends Object {
    constructor(arg0: Label)
    // private initializationCount: number;
    // private initializations: number[];
    // private inputLocals: number[];
    // private inputStack: number[];
    // private outputLocals: number[];
    // private outputStack: number[];
    // private outputStackStart: number;
    // private outputStackTop: number;
    // private owner: Label;
    accept(arg0: MethodWriter): void;
    // private addInitializedType(arg0: number): void;
    copyFrom(arg0: Frame): void;
    execute(arg0: number, arg1: number, arg2: Symbol, arg3: SymbolTable): void;
    // private getConcreteOutputType(arg0: number, arg1: number): number;
    // private getInitializedType(arg0: SymbolTable, arg1: number): number;
    getInputStackSize(): number;
    // private getLocal(arg0: number): number;
    merge(arg0: SymbolTable, arg1: Frame, arg2: number): boolean;
    // private pop(): number;
    // private pop(arg0: number): void;
    // private pop(arg0: string): void;
    // private push(arg0: number): void;
    // private push(arg0: SymbolTable, arg1: string): void;
    setInputFrameFromApiFormat(arg0: SymbolTable, arg1: number, arg2: Object[], arg3: number, arg4: Object[]): void;
    setInputFrameFromDescriptor(arg0: SymbolTable, arg1: number, arg2: string, arg3: number): void;
    // private setLocal(arg0: number, arg1: number): void;
}
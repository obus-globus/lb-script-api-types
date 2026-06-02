import type { Object } from '../../../../java/lang/Object.d.ts'
export class MutableCodePointTrie$MixedBlocks extends Object {
    private constructor()
    // private blockLength: number;
    // private length: number;
    // private mask: number;
    // private shift: number;
    // private table: number[];
    // private addEntry(arg0: number[], arg1: string[], arg2: number, arg3: number, arg4: number): void;
    extend(arg0: string[], arg1: number, arg2: number, arg3: number): void;
    extend(arg0: number[], arg1: number, arg2: number, arg3: number): void;
    findAllSameBlock(arg0: number[], arg1: number): number;
    findBlock(arg0: string[], arg1: string[], arg2: number): number;
    findBlock(arg0: string[], arg1: number[], arg2: number): number;
    findBlock(arg0: number[], arg1: number[], arg2: number): number;
    // private findEntry(arg0: number[], arg1: string[], arg2: number[], arg3: string[], arg4: number, arg5: number): number;
    // private findEntry(arg0: number[], arg1: number, arg2: number): number;
    init(arg0: number, arg1: number): void;
    // private makeHashCode(arg0: string[], arg1: number): number;
    // private makeHashCode(arg0: number): number;
    // private makeHashCode(arg0: number[], arg1: number): number;
    // private modulo(arg0: number, arg1: number): number;
    // private nextIndex(arg0: number, arg1: number): number;
}
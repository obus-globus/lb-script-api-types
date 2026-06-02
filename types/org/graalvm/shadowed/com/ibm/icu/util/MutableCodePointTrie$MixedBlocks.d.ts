import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MutableCodePointTrie$MixedBlocks extends Object {
    private constructor()
    // private blockLength: number;
    // private length: number;
    // private mask: number;
    // private shift: number;
    // private table: number[];
    // private addEntry(data32: number[], data16: string[], blockStart: number, hashCode: number, dataIndex: number): void;
    extend(data: string[], minStart: number, prevDataLength: number, newDataLength: number): void;
    extend(data: number[], minStart: number, prevDataLength: number, newDataLength: number): void;
    findAllSameBlock(data: number[], blockValue: number): number;
    findBlock(data: string[], blockData: string[], blockStart: number): number;
    findBlock(data: string[], blockData: number[], blockStart: number): number;
    findBlock(data: number[], blockData: number[], blockStart: number): number;
    // private findEntry(data32: number[], data16: string[], blockData32: number[], blockData16: string[], blockStart: number, hashCode: number): number;
    // private findEntry(data: number[], blockValue: number, hashCode: number): number;
    init(maxLength: number, newBlockLength: number): void;
    // private makeHashCode(blockData: string[], blockStart: number): number;
    // private makeHashCode(blockValue: number): number;
    // private makeHashCode(blockData: number[], blockStart: number): number;
    // private modulo(n: number, m: number): number;
    // private nextIndex(initialEntryIndex: number, entryIndex: number): number;
}
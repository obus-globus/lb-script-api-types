import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StreamReader extends Object {
    static isPrintable(paramarg0: number): boolean;
    static isPrintable(paramarg0: string): boolean;
    constructor(arg0: Reader)
    constructor(arg0: string)
    // private buffer: string[];
    readonly column: number;
    // private dataLength: number;
    // private dataWindow: number[];
    readonly documentIndex: number;
    // private eof: boolean;
    readonly index: number;
    readonly line: number;
    // private name: string;
    // private pointer: number;
    // private stream: Reader;
    // private ensureEnoughData(): boolean;
    // private ensureEnoughData(arg0: number): boolean;
    forward(): void;
    forward(arg0: number): void;
    getColumn(): number;
    getDocumentIndex(): number;
    getIndex(): number;
    getLine(): number;
    getMark(): Mark;
    // private moveIndices(arg0: number): void;
    peek(): number;
    peek(arg0: number): number;
    prefix(arg0: number): string;
    prefixForward(arg0: number): string;
    resetDocumentIndex(): void;
    // private update(): void;
}
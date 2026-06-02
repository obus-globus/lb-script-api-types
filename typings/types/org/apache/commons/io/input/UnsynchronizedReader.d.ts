import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export abstract class UnsynchronizedReader extends Reader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor()
    readonly closed: boolean;
    // private skipBuffer: string[];
    checkOpen(): void;
    close(): void;
    isClosed(): boolean;
    setClosed(arg0: boolean): void;
    skip(arg0: number): number;
}
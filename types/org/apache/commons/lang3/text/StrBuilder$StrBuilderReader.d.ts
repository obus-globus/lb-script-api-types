import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class StrBuilder$StrBuilderReader extends Reader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(null_: StrBuilder$StrBuilderReader)
    // private mark: number;
    // private pos: number;
    close(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    ready(): boolean;
    reset(): void;
    skip(arg0: number): number;
}
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CharSequenceReader extends Reader implements Serializable {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: CharSequence)
    constructor(arg0: CharSequence, arg1: number)
    constructor(arg0: CharSequence, arg1: number, arg2: number)
    // private charSequence: CharSequence;
    // private end: number;
    // private idx: number;
    // private mark: number;
    // private start: number;
    close(): void;
    // private end(): number;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    ready(): boolean;
    reset(): void;
    skip(arg0: number): number;
    // private start(): number;
    toString(): string;
}
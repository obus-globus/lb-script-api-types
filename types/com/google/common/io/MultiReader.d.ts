import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class MultiReader extends Reader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(readers: Iterator<CharSource>)
    // private current: Reader;
    // private it: Iterator<CharSource>;
    // private advance(): void;
    close(): void;
    read(cbuf: string[], off: number, len: number): number;
    ready(): boolean;
    skip(n: number): number;
}
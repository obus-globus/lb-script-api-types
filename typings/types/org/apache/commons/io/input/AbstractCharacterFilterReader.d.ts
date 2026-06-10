import type { FilterReader } from '../../../../../java/io/FilterReader.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { CharBuffer } from '../../../../../java/nio/CharBuffer.d.ts'
import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export abstract class AbstractCharacterFilterReader extends FilterReader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: Reader)
    constructor(arg0: Reader, arg1: (param0: number) => boolean)
    // private skip: (param0: number) => boolean;
    filter(arg0: number): boolean;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
}
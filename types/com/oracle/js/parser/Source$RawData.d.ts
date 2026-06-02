import type { Source$Data } from '../../../../com/oracle/js/parser/Source$Data.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Source$RawData extends Object implements Source$Data {
    private constructor(reader: Reader)
    private constructor(source: CharSequence, evalCode: boolean)
    readonly evalCode: boolean;
    // private hash: number;
    // private source: string;
    data(): string;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    isEvalCode(): boolean;
    lastModified(): number;
    length(): number;
    toString(): string;
    url(): URL;
}
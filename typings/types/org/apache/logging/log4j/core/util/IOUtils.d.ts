import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IOUtils extends Object {
    static EOF: number;
    static copy(paraminput: Reader, paramoutput: Writer): number;
    static copyLarge(paraminput: Reader, paramoutput: Writer): number;
    static copyLarge(paraminput: Reader, paramoutput: Writer, parambuffer: string[]): number;
    static toString(paraminput: Reader): string;
    constructor()
}
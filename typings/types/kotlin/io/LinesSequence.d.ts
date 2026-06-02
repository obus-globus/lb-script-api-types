import type { BufferedReader } from '../../java/io/BufferedReader.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class LinesSequence extends Object implements Sequence<string> {
    constructor(reader: BufferedReader)
    // private reader: BufferedReader;
    iterator(): Iterator<string>;
}
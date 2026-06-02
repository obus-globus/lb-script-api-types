import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export abstract class CharSink extends Object {
    constructor()
    openStream(): Writer;
    write(arg0: CharSequence): void;
}
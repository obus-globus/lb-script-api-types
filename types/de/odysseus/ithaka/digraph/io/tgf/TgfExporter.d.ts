import type { Digraph } from '../../../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { TgfLabelProvider } from '../../../../../../de/odysseus/ithaka/digraph/io/tgf/TgfLabelProvider.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TgfExporter extends Object {
    constructor()
    constructor(arg0: string)
    // private newline: string;
    export(arg0: TgfLabelProvider<V>, arg1: Digraph<V>, arg2: Writer): void;
}
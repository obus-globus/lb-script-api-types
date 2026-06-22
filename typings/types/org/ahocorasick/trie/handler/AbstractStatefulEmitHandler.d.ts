import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Emit } from '../../../../org/ahocorasick/trie/Emit.d.ts'
import type { StatefulEmitHandler } from '../../../../org/ahocorasick/trie/handler/StatefulEmitHandler.d.ts'
export abstract class AbstractStatefulEmitHandler extends Object implements StatefulEmitHandler {
    constructor()
    readonly emits: Emit[];
    addEmit(arg0: Emit): void;
    emit(arg0: Emit): boolean;
    getEmits(): Emit[];
}
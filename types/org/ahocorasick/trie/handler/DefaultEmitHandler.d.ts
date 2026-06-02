import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Emit } from '../../../../org/ahocorasick/trie/Emit.d.ts'
import type { StatefulEmitHandler } from '../../../../org/ahocorasick/trie/handler/StatefulEmitHandler.d.ts'
export class DefaultEmitHandler extends Object implements StatefulEmitHandler {
    constructor()
    readonly emits: Emit[];
    emit(arg0: Emit): boolean;
    getEmits(): Emit[];
}
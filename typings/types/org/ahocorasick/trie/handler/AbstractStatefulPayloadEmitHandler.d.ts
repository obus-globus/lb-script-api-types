import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PayloadEmit } from '../../../../org/ahocorasick/trie/PayloadEmit.d.ts'
import type { StatefulPayloadEmitHandler } from '../../../../org/ahocorasick/trie/handler/StatefulPayloadEmitHandler.d.ts'
export abstract class AbstractStatefulPayloadEmitHandler<T extends unknown> extends Object implements StatefulPayloadEmitHandler<T> {
    constructor()
    readonly emits: PayloadEmit<T>[];
    addEmit(arg0: PayloadEmit<T>): void;
    getEmits(): PayloadEmit<T>[];
}
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PayloadEmit } from '../../../../org/ahocorasick/trie/PayloadEmit.d.ts'
import type { StatefulPayloadEmitHandler } from '../../../../org/ahocorasick/trie/handler/StatefulPayloadEmitHandler.d.ts'
export class DefaultPayloadEmitHandler<T extends unknown> extends Object implements StatefulPayloadEmitHandler<T> {
    constructor()
    readonly emits: PayloadEmit<T>[];
    emit(arg0: PayloadEmit<T>): boolean;
    getEmits(): PayloadEmit<T>[];
}
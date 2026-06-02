import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PayloadEmit } from '../../../../org/ahocorasick/trie/PayloadEmit.d.ts'
import type { StatefulEmitHandler } from '../../../../org/ahocorasick/trie/handler/StatefulEmitHandler.d.ts'
import type { StatefulPayloadEmitHandler } from '../../../../org/ahocorasick/trie/handler/StatefulPayloadEmitHandler.d.ts'
export class StatefulPayloadEmitDelegateHandler extends Object implements StatefulPayloadEmitHandler<string> {
    constructor(arg0: StatefulEmitHandler)
    // private handler: StatefulEmitHandler;
    emit(arg0: PayloadEmit<string>): boolean;
    getEmits(): PayloadEmit<string>[];
}
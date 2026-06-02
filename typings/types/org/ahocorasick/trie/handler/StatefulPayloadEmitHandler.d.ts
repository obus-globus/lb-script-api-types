import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PayloadEmit } from '../../../../org/ahocorasick/trie/PayloadEmit.d.ts'
import type { PayloadEmitHandler } from '../../../../org/ahocorasick/trie/handler/PayloadEmitHandler.d.ts'
export interface StatefulPayloadEmitHandler<T extends Object | number | string | boolean> extends Object, PayloadEmitHandler<T>{
    getEmits(): PayloadEmit<T>[];
}
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PayloadEmit } from '../../../../org/ahocorasick/trie/PayloadEmit.d.ts'
export interface PayloadEmitHandler<T extends unknown> extends Object{
    emit(arg0: PayloadEmit<T>): boolean;
}
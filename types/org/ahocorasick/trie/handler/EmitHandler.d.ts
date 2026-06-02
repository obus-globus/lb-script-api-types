import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Emit } from '../../../../org/ahocorasick/trie/Emit.d.ts'
export interface EmitHandler extends Object{
    emit(arg0: Emit): boolean;
}
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Emit } from '../../../../org/ahocorasick/trie/Emit.d.ts'
import type { EmitHandler } from '../../../../org/ahocorasick/trie/handler/EmitHandler.d.ts'
export interface StatefulEmitHandler extends Object, EmitHandler{
    getEmits(): Emit[];
}
import type { ContextChain } from '../../../../../../../com/mojang/brigadier/context/ContextChain.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface BuildContextsAccessor<S extends unknown> extends Object{
    getCommand(): ContextChain<S>;
}
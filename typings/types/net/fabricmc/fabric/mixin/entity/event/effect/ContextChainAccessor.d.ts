import type { CommandContext } from '../../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ContextChainAccessor<S extends unknown> extends Object{
    getModifiers(): CommandContext<S>[];
}
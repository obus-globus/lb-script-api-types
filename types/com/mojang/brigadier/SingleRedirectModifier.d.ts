import type { CommandContext } from '../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SingleRedirectModifier<S extends Object | number | string | boolean> extends Object{
    apply(arg0: CommandContext<S>): S;
}
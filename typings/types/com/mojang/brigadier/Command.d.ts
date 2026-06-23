import type { CommandContext } from '../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Command<S extends unknown> extends Object{
    run(arg0: CommandContext<S>): number;
}
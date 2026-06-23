import type { CommandContext } from '../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ResultConsumer<S extends unknown> extends Object{
    onCommandComplete(arg0: CommandContext<S>, arg1: boolean, arg2: number): void;
}
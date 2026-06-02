import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
export interface TimeCommand$ClockGetter extends Object{
    getClock(context: CommandContext<CommandSourceStack>): Holder<WorldClock>;
}
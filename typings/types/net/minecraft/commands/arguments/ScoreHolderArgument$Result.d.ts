import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ScoreHolder } from '../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export interface ScoreHolderArgument$Result extends Object {
    getNames(sender: CommandSourceStack, wildcard: () => ScoreHolder[]): ScoreHolder[];
}
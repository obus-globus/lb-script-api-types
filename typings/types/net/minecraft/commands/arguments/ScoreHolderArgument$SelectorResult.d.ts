import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ScoreHolderArgument$Result } from '../../../../net/minecraft/commands/arguments/ScoreHolderArgument$Result.d.ts'
import type { EntitySelector } from '../../../../net/minecraft/commands/arguments/selector/EntitySelector.d.ts'
import type { ScoreHolder } from '../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class ScoreHolderArgument$SelectorResult extends Object implements ScoreHolderArgument$Result {
    constructor(selector: EntitySelector)
    // private selector: EntitySelector;
    getNames(sender: CommandSourceStack, wildcard: () => ScoreHolder[]): ScoreHolder[];
}
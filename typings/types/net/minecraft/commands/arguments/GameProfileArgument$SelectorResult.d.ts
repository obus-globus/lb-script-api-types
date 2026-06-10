import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { GameProfileArgument$Result } from '../../../../net/minecraft/commands/arguments/GameProfileArgument$Result.d.ts'
import type { EntitySelector } from '../../../../net/minecraft/commands/arguments/selector/EntitySelector.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
export class GameProfileArgument$SelectorResult extends Object implements GameProfileArgument$Result {
    constructor(selector: EntitySelector)
    // private selector: EntitySelector;
    getNames(sender: CommandSourceStack): NameAndId[];
}
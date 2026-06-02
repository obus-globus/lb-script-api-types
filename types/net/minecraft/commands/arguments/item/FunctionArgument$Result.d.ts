import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { CommandFunction } from '../../../../../net/minecraft/commands/functions/CommandFunction.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface FunctionArgument$Result extends Object{
    create(context: CommandContext<CommandSourceStack>): E[];
    unwrap(context: CommandContext<CommandSourceStack>): Pair<Identifier, Either<CommandFunction<CommandSourceStack>, E[]>>;
    unwrapToCollection(context: CommandContext<CommandSourceStack>): Pair<Identifier, E[]>;
}
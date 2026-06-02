import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ResourceOrTagArgument$Result } from '../../../../net/minecraft/commands/arguments/ResourceOrTagArgument$Result.d.ts'
import type { ResourceOrTagKeyArgument$Result } from '../../../../net/minecraft/commands/arguments/ResourceOrTagKeyArgument$Result.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
export class LocateCommand extends Object {
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>, paramcontext: CommandBuildContext): void;
    static showLocateResult(paramsource: CommandSourceStack, paramname: ResourceOrTagArgument$Result<Object>, paramsourcePos: BlockPos, paramfound: Pair<BlockPos, Object>, paramsuccessMessageKey: string, paramincludeY: boolean, paramtaskDuration: Duration): number;
    static showLocateResult(paramsource: CommandSourceStack, paramname: ResourceOrTagKeyArgument$Result<Object>, paramsourcePos: BlockPos, paramfound: Pair<BlockPos, Object>, paramsuccessMessageKey: string, paramincludeY: boolean, paramtaskDuration: Duration): number;
    constructor()
}
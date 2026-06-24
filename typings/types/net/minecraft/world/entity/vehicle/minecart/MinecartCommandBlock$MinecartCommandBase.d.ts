import type { CommandSource } from '../../../../../../net/minecraft/commands/CommandSource.d.ts'
import type { CommandSourceStack } from '../../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { MinecartCommandBlock } from '../../../../../../net/minecraft/world/entity/vehicle/minecart/MinecartCommandBlock.d.ts'
import type { BaseCommandBlock } from '../../../../../../net/minecraft/world/level/BaseCommandBlock.d.ts'
export class MinecartCommandBlock$MinecartCommandBase extends BaseCommandBlock {
    private constructor(null_: MinecartCommandBlock)
    createCommandSourceStack(level: ServerLevel, source: CommandSource): CommandSourceStack;
    isValid(): boolean;
    onUpdated(level: ServerLevel): void;
}
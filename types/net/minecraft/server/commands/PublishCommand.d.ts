import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class PublishCommand extends Object {
    static getSuccessMessage(paramport: number): MutableComponent;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    constructor()
}
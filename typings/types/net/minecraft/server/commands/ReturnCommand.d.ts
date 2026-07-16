import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExecutionCommandSource } from '../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
export class ReturnCommand extends Object {
    static register<T extends ExecutionCommandSource<T>>(paramdispatcher: CommandDispatcher<T>): void;
    constructor()
}
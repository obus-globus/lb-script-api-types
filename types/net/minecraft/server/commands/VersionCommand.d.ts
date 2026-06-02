import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class VersionCommand extends Object {
    static dumpVersion(paramoutput: (param0: Component) => void): void;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>, paramcheckPermissions: boolean): void;
    constructor()
}
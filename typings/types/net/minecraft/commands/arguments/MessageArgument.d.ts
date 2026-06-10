import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { MessageArgument$Message } from '../../../../net/minecraft/commands/arguments/MessageArgument$Message.d.ts'
import type { SignedArgument } from '../../../../net/minecraft/commands/arguments/SignedArgument.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { PlayerChatMessage } from '../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
export class MessageArgument extends Object implements SignedArgument<MessageArgument$Message> {
    static getMessage(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Component;
    static message(): MessageArgument;
    static resolveChatMessage(paramcontext: CommandContext<CommandSourceStack>, paramname: string, paramtask: (param0: PlayerChatMessage) => void): void;
    constructor()
    getExamples(): string[];
    parse(reader: StringReader): MessageArgument$Message;
    parse<S extends Object | number | string | boolean>(reader: StringReader, source: S): MessageArgument$Message;
}
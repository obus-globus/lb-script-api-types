import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { MessageArgument$Part } from '../../../../net/minecraft/commands/arguments/MessageArgument$Part.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class MessageArgument$Message extends Record {
    static parseText(paramreader: StringReader, paramallowSelectors: boolean): MessageArgument$Message;
    // private parts: MessageArgument$Part[];
    // private text: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    parts(): MessageArgument$Part[];
    // private resolveComponent(sender: CommandSourceStack): Component;
    text(): string;
    toComponent(sender: CommandSourceStack, allowSelectors: boolean): Component;
    toString(): string;
}
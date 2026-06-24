import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Message } from '../../../../../../../net/caffeinemc/mods/sodium/client/console/message/Message.d.ts'
import type { MessageLevel } from '../../../../../../../net/caffeinemc/mods/sodium/client/console/message/MessageLevel.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ConsoleRenderer$ActiveMessage extends Record {
    static create(paramarg0: Message, paramarg1: number): ConsoleRenderer$ActiveMessage;
    private constructor(level: MessageLevel, text: Component, duration: number, timestamp: number)
    // private duration: number;
    // private level: MessageLevel;
    // private text: Component;
    // private timestamp: number;
    duration(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    level(): MessageLevel;
    text(): Component;
    timestamp(): number;
    toString(): string;
}
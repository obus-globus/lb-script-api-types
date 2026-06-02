import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatComponent$ChatMethod } from '../../../../../net/minecraft/client/gui/components/ChatComponent$ChatMethod.d.ts'
export class ChatComponent$Draft extends Record {
    constructor(text: string, chatMethod: ChatComponent$ChatMethod)
    // private chatMethod: ChatComponent$ChatMethod;
    // private text: string;
    chatMethod(): ChatComponent$ChatMethod;
    equals(o: Object | null): boolean;
    hashCode(): number;
    text(): string;
    toString(): string;
}
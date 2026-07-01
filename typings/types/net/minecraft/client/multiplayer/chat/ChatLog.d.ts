import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LoggedChatEvent } from '../../../../../net/minecraft/client/multiplayer/chat/LoggedChatEvent.d.ts'
export class ChatLog extends Object {
    static codec(paramcapacity: number): Codec<ChatLog>;
    constructor(capacity: number)
    // private buffer: LoggedChatEvent[];
    // private nextId: number;
    end(): number;
    // private index(id: number): number;
    // private loggedChatEvents(): LoggedChatEvent[];
    lookup(id: number): LoggedChatEvent;
    push(event: LoggedChatEvent): void;
    // private size(): number;
    start(): number;
}
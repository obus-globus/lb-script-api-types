import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { ThreadLocal } from '../../../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StringBuilderWriter } from '../../../../../../../org/apache/commons/io/output/StringBuilderWriter.d.ts'
export class SocketEventListener extends Object implements EventListener {
    static INSTANCE: SocketEventListener;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private events: JavaMap<string, Class<Event>>;
    // private registeredEvents: JavaMap<Class<Event>, EventHook<Event>>;
    readonly running: boolean;
    // private writeBuffer: ThreadLocal<StringBuilderWriter>;
    children(): EventListener[];
    parent(): EventListener | null;
    register(name: string): void;
    registerAll(): void;
    // private serializeAndBroadcast(event: Event): void;
    unregister(): void;
    unregister(name: string): void;
    // private writeToSockets(event: Event): void;
}
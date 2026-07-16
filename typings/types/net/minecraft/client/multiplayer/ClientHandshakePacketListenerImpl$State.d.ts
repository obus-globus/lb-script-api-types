import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class ClientHandshakePacketListenerImpl$State extends Enum<ClientHandshakePacketListenerImpl$State> {
    static AUTHORIZING: ClientHandshakePacketListenerImpl$State;
    static CONNECTING: ClientHandshakePacketListenerImpl$State;
    static ENCRYPTING: ClientHandshakePacketListenerImpl$State;
    static JOINING: ClientHandshakePacketListenerImpl$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ClientHandshakePacketListenerImpl$State;
    static values(): ClientHandshakePacketListenerImpl$State[];
    private constructor(message: Component, fromStates: ClientHandshakePacketListenerImpl$State[])
    // private fromStates: ClientHandshakePacketListenerImpl$State[];
    // private message: Component;
    name(): "CONNECTING" | "AUTHORIZING" | "ENCRYPTING" | "JOINING";
}
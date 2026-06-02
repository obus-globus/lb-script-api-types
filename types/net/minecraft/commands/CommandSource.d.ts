import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export interface CommandSource extends Object{
    acceptsFailure(): boolean;
    acceptsSuccess(): boolean;
    alwaysAccepts(): boolean;
    sendSystemMessage(message: Component): void;
    shouldInformAdmins(): boolean;
}
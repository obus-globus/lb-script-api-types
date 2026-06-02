import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export interface ClientReceiveMessageEvents$GameCanceled extends Object{
    onReceiveGameMessageCanceled(arg0: Component, arg1: boolean): void;
}
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export interface ClientReceiveMessageEvents$Game extends Object{
    onReceiveGameMessage(arg0: Component, arg1: boolean): void;
}
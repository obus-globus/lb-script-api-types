import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export interface ClientReceiveMessageEvents$AllowGame extends Object{
    allowReceiveGameMessage(arg0: Component, arg1: boolean): boolean;
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export interface ServerMessageEvents$AllowGameMessage extends Object{
    allowGameMessage(arg0: MinecraftServer, arg1: Component, arg2: boolean): boolean;
}
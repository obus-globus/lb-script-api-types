import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export interface DebuggedOwner extends Object{
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
}
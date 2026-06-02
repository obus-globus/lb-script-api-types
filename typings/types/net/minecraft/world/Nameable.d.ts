import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export interface Nameable extends Object{
    getCustomName(): Component;
    getDisplayName(): Component;
    getName(): Component;
    getPlainTextName(): string;
    hasCustomName(): boolean;
}
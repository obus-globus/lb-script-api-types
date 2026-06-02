import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export interface FabricTagKey extends Object{
    getName(): Component;
    getTranslationKey(): string;
}
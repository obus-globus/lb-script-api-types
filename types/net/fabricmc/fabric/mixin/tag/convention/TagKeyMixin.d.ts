import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricTagKey } from '../../../../../../net/fabricmc/fabric/api/tag/FabricTagKey.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export interface TagKeyMixin extends Object, FabricTagKey{
    getName(): Component;
    getTranslationKey(): string;
}
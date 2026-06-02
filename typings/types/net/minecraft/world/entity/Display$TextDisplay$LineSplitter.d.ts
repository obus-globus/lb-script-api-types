import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Display$TextDisplay$CachedInfo } from '../../../../net/minecraft/world/entity/Display$TextDisplay$CachedInfo.d.ts'
export interface Display$TextDisplay$LineSplitter extends Object{
    split(input: Component, width: number): Display$TextDisplay$CachedInfo;
}
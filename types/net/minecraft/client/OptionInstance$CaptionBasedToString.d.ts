import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export interface OptionInstance$CaptionBasedToString<T extends Object | number | string | boolean> extends Object{
    toString(caption: Component, value: T): Component;
}
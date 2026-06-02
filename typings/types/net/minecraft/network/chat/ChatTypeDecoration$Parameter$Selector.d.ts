import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChatType$Bound } from '../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export interface ChatTypeDecoration$Parameter$Selector extends Object{
    select(content: Component, chatType: ChatType$Bound): Component;
}
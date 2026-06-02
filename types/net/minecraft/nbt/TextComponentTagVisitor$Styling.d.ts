import type { Object } from '../../../java/lang/Object.d.ts'
import type { TextComponentTagVisitor$Token } from '../../../net/minecraft/nbt/TextComponentTagVisitor$Token.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
export interface TextComponentTagVisitor$Styling extends Object{
    keyStyle(): Style;
    numberStyle(): Style;
    stringStyle(): Style;
    token(token: TextComponentTagVisitor$Token): Component;
}
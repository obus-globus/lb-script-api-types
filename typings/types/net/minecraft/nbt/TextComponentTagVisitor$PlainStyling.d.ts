import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TextComponentTagVisitor$Styling } from '../../../net/minecraft/nbt/TextComponentTagVisitor$Styling.d.ts'
import type { TextComponentTagVisitor$Token } from '../../../net/minecraft/nbt/TextComponentTagVisitor$Token.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
export class TextComponentTagVisitor$PlainStyling extends Object implements TextComponentTagVisitor$Styling {
    static INSTANCE: TextComponentTagVisitor$Styling;
    private constructor()
    // private tokens: JavaMap<TextComponentTagVisitor$Token, Component>;
    keyStyle(): Style;
    numberStyle(): Style;
    stringStyle(): Style;
    token(token: TextComponentTagVisitor$Token): Component;
}
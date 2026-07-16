import type { File } from '../../../../../java/io/File.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NotificationEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/NotificationEvent.d.ts'
import type { NotificationEvent$Severity } from '../../../../../net/ccbluex/liquidbounce/event/events/NotificationEvent$Severity.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { MessageMetadata } from '../../../../../net/ccbluex/liquidbounce/utils/client/MessageMetadata.d.ts'
import type { ChatFormatting } from '../../../../../net/minecraft/ChatFormatting.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClickEvent } from '../../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { HoverEvent } from '../../../../../net/minecraft/network/chat/HoverEvent.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { TextColor } from '../../../../../net/minecraft/network/chat/TextColor.d.ts'
export class ClientChat extends Object {
    static bold(paramarg0: MutableComponent, paramarg1: boolean): MutableComponent;
    static bypassNameProtection(paramarg0: MutableComponent): MutableComponent;
    static chat(paramarg0: string): void;
    static chat(paramarg0: string, paramarg1: Command): void;
    static chat(paramarg0: string, paramarg1: ClientModule): void;
    static chat(paramarg0: Component, paramarg1: Command): void;
    static chat(paramarg0: Component, paramarg1: ClientModule): void;
    static chat(paramarg0: Component, paramarg1: MessageMetadata): void;
    static chat(paramarg0: Component[], paramarg1: MessageMetadata): void;
    static clickablePath(paramarg0: File): MutableComponent;
    static copyable(paramarg0: MutableComponent, paramarg1: string, paramarg2: HoverEvent): MutableComponent;
    static getBypassesNameProtection(paramarg0: TextColor): boolean;
    static gradientText(paramarg0: string, paramarg1: Color4b, paramarg2: Color4b): MutableComponent;
    static highlight(paramarg0: string): MutableComponent;
    static highlight(paramarg0: MutableComponent): MutableComponent;
    static italic(paramarg0: MutableComponent, paramarg1: boolean): MutableComponent;
    static markAsError(paramarg0: string): MutableComponent;
    static markAsError(paramarg0: MutableComponent): MutableComponent;
    static notification(paramarg0: string, paramarg1: string, paramarg2: NotificationEvent$Severity): NotificationEvent;
    static notification(paramarg0: string, paramarg1: Component, paramarg2: NotificationEvent$Severity): NotificationEvent;
    static notification(paramarg0: Component, paramarg1: string, paramarg2: NotificationEvent$Severity): NotificationEvent;
    static obfuscated(paramarg0: MutableComponent, paramarg1: boolean): MutableComponent;
    static onClick(paramarg0: MutableComponent, paramarg1: ClickEvent): MutableComponent;
    static onClickRun(paramarg0: MutableComponent, paramarg1: () => void): MutableComponent;
    static onHover(paramarg0: MutableComponent, paramarg1: HoverEvent): MutableComponent;
    static openChat(paramarg0: Minecraft, paramarg1: string, paramarg2: boolean, paramarg3: boolean): void;
    static plusAssign(paramarg0: MutableComponent, paramarg1: string): void;
    static plusAssign(paramarg0: MutableComponent, paramarg1: Component): void;
    static regular(paramarg0: string): MutableComponent;
    static regular(paramarg0: MutableComponent): MutableComponent;
    static strikethrough(paramarg0: MutableComponent, paramarg1: boolean): MutableComponent;
    static underline(paramarg0: MutableComponent, paramarg1: boolean): MutableComponent;
    static variable(paramarg0: string): MutableComponent;
    static variable(paramarg0: MutableComponent): MutableComponent;
    static warning(paramarg0: string): MutableComponent;
    static warning(paramarg0: MutableComponent): MutableComponent;
    static withColor(paramarg0: MutableComponent, paramarg1: ChatFormatting): MutableComponent;
    static withColor(paramarg0: MutableComponent, paramarg1: TextColor): MutableComponent;
}
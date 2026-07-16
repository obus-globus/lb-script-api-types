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
    static bold(self: MutableComponent, value: boolean | null): MutableComponent;
    static bypassNameProtection(self: MutableComponent): MutableComponent;
    static chat(text: string): void;
    static chat(text: string, command: Command): void;
    static chat(text: string, module: ClientModule): void;
    static chat(text: Component, command: Command): void;
    static chat(text: Component, module: ClientModule): void;
    static chat(text: Component, metadata: MessageMetadata): void;
    static chat(texts: Component[], metadata: MessageMetadata): void;
    static clickablePath(file: File): MutableComponent;
    static copyable(self: MutableComponent, copyContent: string, hover: HoverEvent | null): MutableComponent;
    static getBypassesNameProtection(paramarg0: TextColor): boolean;
    static gradientText(text: string, startColor: Color4b, endColor: Color4b): MutableComponent;
    static highlight(text: string): MutableComponent;
    static highlight(text: MutableComponent): MutableComponent;
    static italic(self: MutableComponent, value: boolean | null): MutableComponent;
    static markAsError(text: string): MutableComponent;
    static markAsError(text: MutableComponent): MutableComponent;
    static notification(title: string, message: string, severity: NotificationEvent$Severity): NotificationEvent;
    static notification(title: string, message: Component, severity: NotificationEvent$Severity): NotificationEvent;
    static notification(title: Component, message: string, severity: NotificationEvent$Severity): NotificationEvent;
    static obfuscated(self: MutableComponent, value: boolean | null): MutableComponent;
    static onClick(self: MutableComponent, event: ClickEvent | null): MutableComponent;
    static onClickRun(self: MutableComponent, callback: () => void): MutableComponent;
    static onHover(self: MutableComponent, event: HoverEvent | null): MutableComponent;
    static openChat(self: Minecraft, text: string, draft: boolean, closeOnSubmit: boolean): void;
    static plusAssign(self: MutableComponent, other: string): void;
    static plusAssign(self: MutableComponent, other: Component): void;
    static regular(text: string): MutableComponent;
    static regular(text: MutableComponent): MutableComponent;
    static strikethrough(self: MutableComponent, value: boolean | null): MutableComponent;
    static underline(self: MutableComponent, value: boolean | null): MutableComponent;
    static variable(text: string): MutableComponent;
    static variable(text: MutableComponent): MutableComponent;
    static warning(text: string): MutableComponent;
    static warning(text: MutableComponent): MutableComponent;
    static withColor(self: MutableComponent, value: ChatFormatting | null): MutableComponent;
    static withColor(self: MutableComponent, value: TextColor | null): MutableComponent;
}
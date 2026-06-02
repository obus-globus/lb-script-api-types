import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
export class SignText extends Object {
    static DIRECT_CODEC: Codec<SignText>;
    static LINES: number;
    constructor()
    constructor(messages: Component[], filteredMessages: Component[], color: DyeColor, hasGlowingText: boolean)
    readonly color: DyeColor;
    // private filteredMessages: Component[];
    // private hasGlowingText: boolean;
    // private messages: Component[];
    // private renderMessagedFiltered: boolean;
    // private renderMessages: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    // private filteredMessages(): Optional<Component[]>;
    getColor(): DyeColor;
    getMessage(index: number, shouldFilter: boolean): Component;
    getMessages(shouldFilter: boolean): Component[];
    getRenderMessages(shouldFilter: boolean, prepare: (param0: Component) => (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    hasAnyClickCommands(player: Player): boolean;
    hasGlowingText(): boolean;
    hasMessage(player: Player): boolean;
    setColor(color: DyeColor): SignText;
    setHasGlowingText(hasGlowingText: boolean): SignText;
    setMessage(index: number, message: Component): SignText;
    setMessage(index: number, rawMessage: Component, filteredMessage: Component): SignText;
}
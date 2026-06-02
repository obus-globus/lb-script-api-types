import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { NarrationSupplier } from '../../../../../net/minecraft/client/gui/narration/NarrationSupplier.d.ts'
import type { Language } from '../../../../../net/minecraft/locale/Language.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { TooltipComponent } from '../../../../../net/minecraft/world/inventory/tooltip/TooltipComponent.d.ts'
export class Tooltip extends Object implements NarrationSupplier {
    static create(parammessage: Component): Tooltip;
    static create(parammessage: Component, paramcomponent: Optional<TooltipComponent>, paramstyle: Identifier): Tooltip;
    static create(parammessage: Component, paramnarration: Component): Tooltip;
    static splitTooltip(paramminecraft: Minecraft, parammessage: Component): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    private constructor(message: Component, narration: Component, component: Optional<TooltipComponent>, style: Identifier)
    // private cachedTooltip: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    // private component: Optional<TooltipComponent>;
    // private message: Component;
    // private narration: Component;
    // private splitWithLanguage: Language;
    // private style: Identifier;
    component(): Optional<TooltipComponent>;
    style(): Identifier;
    toCharSequence(minecraft: Minecraft): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    updateNarration(output: NarrationElementOutput): void;
}
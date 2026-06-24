import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ItemDisplayWidget } from '../../../../../../net/minecraft/client/gui/components/ItemDisplayWidget.d.ts'
import type { StatsScreen$ItemStatisticsList$ItemRow } from '../../../../../../net/minecraft/client/gui/screens/achievement/StatsScreen$ItemStatisticsList$ItemRow.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class StatsScreen$ItemStatisticsList$ItemRow$ItemRowWidget extends ItemDisplayWidget {
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    private constructor(null_: StatsScreen$ItemStatisticsList$ItemRow, itemStack: ItemStack)
    extractTooltip(graphics: GuiGraphicsExtractor, x: number, y: number): void;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
}
import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameRenderEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/GameRenderEvent.d.ts'
import type { BlinkEspData } from '../../../../../../net/ccbluex/liquidbounce/features/blink/esp/BlinkEspData.d.ts'
import type { BlinkEspMode } from '../../../../../../net/ccbluex/liquidbounce/features/blink/esp/BlinkEspMode.d.ts'
import type { Color4b } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class BlinkEspModel extends BlinkEspMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>, nametagOverride: () => Component | null, getEspData: () => BlinkEspData | null)
    // private lightPercent: number;
    // private /*not mapped: */ getLightPercent(): number;
    readonly nametagOverride: () => Component | null;
    // private outlineColor: Color4b;
    // private /*not mapped: */ getOutlineColor(): Color4b;
    readonly parent: ModeValueGroup<Object>;
    // private poseStack: PoseStack;
    // private renderHandler: EventHook<GameRenderEvent>;
}
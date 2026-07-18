import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Mod } from '../../../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { KeyboardKeyEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/KeyboardKeyEvent.d.ts'
import type { Chronometer } from '../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Hides client appearance
 *
 * using 2x CRTL + SHIFT to hide and unhide the client
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/HideAppearance.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/HideAppearance.kt:57}
 */
export class HideAppearance extends Object implements EventListener {
    static INSTANCE: HideAppearance;
    readonly debugDisplayName: Component;
    // private isDestructed: boolean;
    /*not mapped: */ isDestructed(): boolean;
    // private isHidingNow: boolean;
    /*not mapped: */ isHidingNow(): boolean;
    // private keyHandler: EventHook<KeyboardKeyEvent>;
    // private modContainersToHide: JavaMap<string, Mod | null>;
    readonly running: boolean;
    // private shiftChronometer: Chronometer;
    children(): EventListener[];
    /**
     * Attempt to destruct the client
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/HideAppearance.kt#L131 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/HideAppearance.kt:131}
     */
    destructClient(): void;
    parent(): EventListener | null;
    unregister(): void;
    // private updateClient(): void;
    wipeClient(): Thread;
}
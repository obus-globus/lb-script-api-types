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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/HideAppearance.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/HideAppearance.kt:58}
 */
export class HideAppearance extends Object implements EventListener {
    static INSTANCE: HideAppearance;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/HideAppearance.kt#L132 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/HideAppearance.kt:132}
     */
    destructClient(): void;
    parent(): EventListener | null;
    unregister(): void;
    // private updateClient(): void;
    wipeClient(): Thread;
}
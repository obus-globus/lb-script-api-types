import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { OverlayRenderEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { NativeHudComponent } from '../../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/NativeHudComponent.d.ts'
import type { MinimapHudComponent$ExtraElement } from '../../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapHudComponent$ExtraElement.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class MinimapHudComponent extends NativeHudComponent {
    static INSTANCE: MinimapHudComponent;
    // private CLOCK: ItemStack;
    // private /*not mapped: */ getCLOCK(): ItemStack;
    // private COMPASS: ItemStack;
    // private /*not mapped: */ getCOMPASS(): ItemStack;
    // private extraElements: MinimapHudComponent$ExtraElement[];
    // private fixedDirection: boolean;
    // private /*not mapped: */ getFixedDirection(): boolean;
    readonly renderHandler: EventHook<OverlayRenderEvent>;
    // private size: number;
    // private /*not mapped: */ getSize(): number;
    // private viewDistance: number;
    // private /*not mapped: */ getViewDistance(): number;
}
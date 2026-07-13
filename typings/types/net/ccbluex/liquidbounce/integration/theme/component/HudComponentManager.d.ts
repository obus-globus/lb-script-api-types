import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Theme$ComponentCatalogEntry } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/Theme$ComponentCatalogEntry.d.ts'
import type { HudComponent } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponent.d.ts'
import type { HudComponentTweak } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponentTweak.d.ts'
import type { MinimapHudComponent } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapHudComponent.d.ts'
export class HudComponentManager extends Object {
    static INSTANCE: HudComponentManager;
    static getComponentWithTweak(tweak: HudComponentTweak): HudComponent;
    static isTweakEnabled(tweak: HudComponentTweak): boolean;
    readonly components: HudComponent[];
    readonly nativeComponents: MinimapHudComponent[];
    addComponent(id: string): HudComponent | null;
    bringComponentToFront(component: HudComponent): number;
    getComponent(id: string): HudComponent | null;
    getComponentCatalog(id: string): Theme$ComponentCatalogEntry[];
    getComponentWithTweak(tweak: HudComponentTweak): HudComponent | null;
    getComponents(id: string | null): HudComponent[];
    isTweakEnabled(tweak: HudComponentTweak): boolean;
    updateComponents(): void;
}
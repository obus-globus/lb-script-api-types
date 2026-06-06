import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { FogData } from '../../../../../../../net/minecraft/client/renderer/fog/FogData.d.ts'
/**
 * @see FogData
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience.kt:47}
 */
export class ModuleCustomAmbience$FogValueGroup extends ToggleableValueGroup {
    static INSTANCE: ModuleCustomAmbience$FogValueGroup;
    // private backgroundColor: Color4b;
    // private /*not mapped: */ getBackgroundColor(): Color4b;
    // private cloudEnd: number;
    // private /*not mapped: */ getCloudEnd(): number;
    readonly disableWorldFog: boolean;
    // private environmental: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getEnvironmental(): ClosedFloatingPointRange<number>;
    // private renderDistance: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getRenderDistance(): ClosedFloatingPointRange<number>;
    // private skyEnd: number;
    // private /*not mapped: */ getSkyEnd(): number;
    modifyClearColor(original: number): number;
    /**
     * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.render.fog.MixinFogRenderer
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience.kt:65}
     */
    modifyFogData(fogData: FogData): void;
}
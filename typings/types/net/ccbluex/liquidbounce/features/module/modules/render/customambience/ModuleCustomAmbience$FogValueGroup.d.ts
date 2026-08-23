import type { ClosedFloatingPointRange } from '../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { FogData } from '../../../../../../../../net/minecraft/client/renderer/fog/FogData.d.ts'
import type { Vector4fc } from '../../../../../../../../org/joml/Vector4fc.d.ts'
/**
 * @see FogData
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/customambience/ModuleCustomAmbience.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/customambience/ModuleCustomAmbience.kt:53}
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
    modifyClearColor(original: Vector4fc): Vector4fc;
    /**
     * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.render.fog.MixinFogRenderer
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/customambience/ModuleCustomAmbience.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/customambience/ModuleCustomAmbience.kt:71}
     */
    modifyFogData(fogData: FogData): void;
}
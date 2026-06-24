import type { NativeImage } from '../../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { DynamicTexture } from '../../../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class ModuleParticles$BuiltinParticle extends Enum<ModuleParticles$BuiltinParticle> implements Tagged {
    static CROWN: ModuleParticles$BuiltinParticle;
    static Companion: Tagged$Companion;
    /**
     * Original: https://www.svgrepo.com/svg/487288/dollar?edit=true
     * Modified: @sqlerrorthing
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleParticles.kt#L154 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleParticles.kt:154}
     */
    static DOLLAR: ModuleParticles$BuiltinParticle;
    static HEART: ModuleParticles$BuiltinParticle;
    static LIGHTNING: ModuleParticles$BuiltinParticle;
    static LINE: ModuleParticles$BuiltinParticle;
    /**
     * Original: IDK (first: https://github.com/CCBlueX/LiquidBounce/pull/4976)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleParticles.kt#L143 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleParticles.kt:143}
     */
    static ORBIZ: ModuleParticles$BuiltinParticle;
    static POINT: ModuleParticles$BuiltinParticle;
    static RHOMBUS: ModuleParticles$BuiltinParticle;
    static SNOWFLAKE: ModuleParticles$BuiltinParticle;
    static SPARK: ModuleParticles$BuiltinParticle;
    /**
     * Original: https://www.svgrepo.com/svg/528677/stars-minimalistic
     * Modified: @sqlerrorthing
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleParticles.kt#L148 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleParticles.kt:148}
     */
    static STAR: ModuleParticles$BuiltinParticle;
    static getEntries(): ModuleParticles$BuiltinParticle[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleParticles$BuiltinParticle;
    static values(): (Object | null)[];
    private constructor(tag: string, fileName: string)
    readonly image: NativeImage;
    readonly tag: string;
    readonly texture: DynamicTexture;
    name(): "ORBIZ" | "STAR" | "DOLLAR" | "CROWN" | "HEART" | "LIGHTNING" | "LINE" | "POINT" | "RHOMBUS" | "SNOWFLAKE" | "SPARK";
}
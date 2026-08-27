import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * TridentBoost module
 *
 * Strengthens the riptide dash of a trident and allows it to be used on dry land.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleTridentBoost.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleTridentBoost.kt:30}
 */
export class ModuleTridentBoost extends ClientModule {
    static INSTANCE: ModuleTridentBoost;
    static ignoresWaterRequirement(): boolean;
    static scaleHorizontal(original: number): number;
    static scaleVertical(original: number): number;
    // private horizontalMultiplier: number;
    // private /*not mapped: */ getHorizontalMultiplier(): number;
    // private onLand: boolean;
    // private /*not mapped: */ getOnLand(): boolean;
    // private verticalMultiplier: number;
    // private /*not mapped: */ getVerticalMultiplier(): number;
    ignoresWaterRequirement(): boolean;
    scaleHorizontal(original: number): number;
    scaleVertical(original: number): number;
}
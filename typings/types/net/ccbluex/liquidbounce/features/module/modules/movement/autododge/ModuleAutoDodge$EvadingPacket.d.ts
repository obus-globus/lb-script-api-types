import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class ModuleAutoDodge$EvadingPacket extends Object {
    constructor(idx: number, ticksToImpact: number | null)
    readonly idx: number;
    /**
     * Ticks until impact. Null if evaded
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/autododge/ModuleAutoDodge.kt#L158 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/autododge/ModuleAutoDodge.kt:158}
     */
    readonly ticksToImpact: number | null;
    component1(): number;
    component2(): number | null;
    copy(idx: number, ticksToImpact: number | null): ModuleAutoDodge$EvadingPacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
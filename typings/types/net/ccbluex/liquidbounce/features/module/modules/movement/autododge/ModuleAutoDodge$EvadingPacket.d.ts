import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class ModuleAutoDodge$EvadingPacket extends Object {
    constructor(idx: number, ticksToImpact: number | null)
    readonly idx: number;
    /**
     * Ticks until impact. Null if evaded
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/autododge/ModuleAutoDodge.kt#L158 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/autododge/ModuleAutoDodge.kt:158}
     */
    readonly ticksToImpact: number | null;
    component1(): number;
    component2(): number | null;
    copy(idx: number, ticksToImpact: number | null): ModuleAutoDodge$EvadingPacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
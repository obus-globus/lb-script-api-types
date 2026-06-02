import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IMixinConfig } from '../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfig.d.ts'
import type { ISelectorContext } from '../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { IMixinContext } from '../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
export class FabricUtil extends Object {
    static COMPATIBILITY_0_10_0: number;
    static COMPATIBILITY_0_14_0: number;
    static COMPATIBILITY_0_16_5: number;
    static COMPATIBILITY_0_17_0: number;
    static COMPATIBILITY_0_17_1: number;
    static COMPATIBILITY_0_9_2: number;
    static COMPATIBILITY_LATEST: number;
    static KEY_COMPATIBILITY: string;
    static KEY_MOD_ID: string;
    static getCompatibility(paramarg0: IMixinConfig): number;
    static getCompatibility(paramarg0: ISelectorContext): number;
    static getCompatibility(paramarg0: IMixinContext): number;
    static getModId(paramarg0: IMixinConfig): string;
    static getModId(paramarg0: IMixinConfig, paramarg1: string): string;
    static getModId(paramarg0: ISelectorContext): string;
    private constructor()
}
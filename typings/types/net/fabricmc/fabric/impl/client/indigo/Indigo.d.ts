import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientModInitializer } from '../../../../../../net/fabricmc/api/ClientModInitializer.d.ts'
import type { AoConfig } from '../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/aocalc/AoConfig.d.ts'
export class Indigo extends Object implements ClientModInitializer {
    static AMBIENT_OCCLUSION_MODE: AoConfig;
    static DEBUG_COMPARE_LIGHTING: boolean;
    static FIX_EXTERIOR_VERTEX_LIGHTING: boolean;
    static FIX_LUMINOUS_AO_SHADE: boolean;
    static FIX_MEAN_LIGHT_CALCULATION: boolean;
    static FIX_SMOOTH_LIGHTING_OFFSET: boolean;
    constructor()
    onInitializeClient(): void;
}
import type { ScopedValue } from '../../../../../../java/lang/ScopedValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientModInitializer } from '../../../../../../net/fabricmc/api/ClientModInitializer.d.ts'
import type { AoConfig } from '../../../../../../net/fabricmc/fabric/impl/client/indigo/renderer/aocalc/AoConfig.d.ts'
import type { MultiBufferSource } from '../../../../../../net/minecraft/client/renderer/MultiBufferSource.d.ts'
export class Indigo extends Object implements ClientModInitializer {
    static AMBIENT_OCCLUSION_MODE: AoConfig;
    static DEBUG_COMPARE_LIGHTING: boolean;
    static FIX_EXTERIOR_VERTEX_LIGHTING: boolean;
    static FIX_LUMINOUS_AO_SHADE: boolean;
    static FIX_MEAN_LIGHT_CALCULATION: boolean;
    static FIX_SMOOTH_LIGHTING_OFFSET: boolean;
    static LEVEL_RENDERER_BUFFER_SOURCE: ScopedValue<MultiBufferSource>;
    constructor()
    onInitializeClient(): void;
}
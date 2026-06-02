import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Background } from '../../../../../net/ccbluex/liquidbounce/integration/theme/Background.d.ts'
import type { ThemeBackground$Shader } from '../../../../../net/ccbluex/liquidbounce/integration/theme/ThemeBackground$Shader.d.ts'
import type { ThemeMetadata } from '../../../../../net/ccbluex/liquidbounce/integration/theme/ThemeMetadata.d.ts'
export class ThemeBackground$Shader$Companion extends Object {
    // private SAMPLER: GpuSampler;
    build(metadata: ThemeMetadata, background: Background, fragmentShader: string): ThemeBackground$Shader;
}
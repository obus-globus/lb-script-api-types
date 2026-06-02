import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AlphaTest } from '../../../../../net/irisshaders/iris/gl/blending/AlphaTest.d.ts'
import type { BlendModeOverride } from '../../../../../net/irisshaders/iris/gl/blending/BlendModeOverride.d.ts'
import type { BufferBlendInformation } from '../../../../../net/irisshaders/iris/gl/blending/BufferBlendInformation.d.ts'
import type { ViewportData } from '../../../../../net/irisshaders/iris/gl/framebuffer/ViewportData.d.ts'
import type { ProgramSource } from '../../../../../net/irisshaders/iris/shaderpack/programs/ProgramSource.d.ts'
import type { ShaderProperties } from '../../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
export class ProgramDirectives extends Object {
    private constructor(arg0: number[], arg1: ViewportData, arg2: AlphaTest, arg3: Optional<BlendModeOverride>, arg4: BufferBlendInformation[], arg5: number[], arg6: { [key: number]: boolean })
    constructor(arg0: ProgramSource, arg1: ShaderProperties, arg2: number[], arg3: BlendModeOverride)
    readonly alphaTestOverride: AlphaTest;
    readonly blendModeOverride: Optional<BlendModeOverride>;
    // private bufferBlendInformations: BufferBlendInformation[];
    readonly drawBuffers: number[];
    readonly explicitFlips: { [key: number]: boolean };
    readonly mipmappedBuffers: number[];
    // private unknownDrawBuffers: boolean;
    readonly viewportScale: ViewportData;
    getAlphaTestOverride(): Optional<AlphaTest>;
    getBlendModeOverride(): Optional<BlendModeOverride>;
    getBufferBlendOverrides(): BufferBlendInformation[];
    getDrawBuffers(): number[];
    getExplicitFlips(): { [key: number]: boolean };
    getMipmappedBuffers(): number[];
    getViewportScale(): ViewportData;
    hasUnknownDrawBuffers(): boolean;
    withOverriddenDrawBuffers(arg0: number[]): ProgramDirectives;
}
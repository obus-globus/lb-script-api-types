import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVSampleLocations extends Object {
    static GL_FRAMEBUFFER_PROGRAMMABLE_SAMPLE_LOCATIONS_NV: number;
    static GL_FRAMEBUFFER_SAMPLE_LOCATION_PIXEL_GRID_NV: number;
    static GL_PROGRAMMABLE_SAMPLE_LOCATION_NV: number;
    static GL_PROGRAMMABLE_SAMPLE_LOCATION_TABLE_SIZE_NV: number;
    static GL_SAMPLE_LOCATION_NV: number;
    static GL_SAMPLE_LOCATION_PIXEL_GRID_HEIGHT_NV: number;
    static GL_SAMPLE_LOCATION_PIXEL_GRID_WIDTH_NV: number;
    static GL_SAMPLE_LOCATION_SUBPIXEL_BITS_NV: number;
    static glFramebufferSampleLocationsfvNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glFramebufferSampleLocationsfvNV(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glNamedFramebufferSampleLocationsfvNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glNamedFramebufferSampleLocationsfvNV(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glResolveDepthValuesNV(): void;
    static nglFramebufferSampleLocationsfvNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglNamedFramebufferSampleLocationsfvNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}
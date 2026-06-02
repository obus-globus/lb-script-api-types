import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBSampleLocations extends Object {
    static GL_FRAMEBUFFER_PROGRAMMABLE_SAMPLE_LOCATIONS_ARB: number;
    static GL_FRAMEBUFFER_SAMPLE_LOCATION_PIXEL_GRID_ARB: number;
    static GL_PROGRAMMABLE_SAMPLE_LOCATION_TABLE_SIZE_ARB: number;
    static GL_SAMPLE_LOCATION_PIXEL_GRID_HEIGHT_ARB: number;
    static GL_SAMPLE_LOCATION_PIXEL_GRID_WIDTH_ARB: number;
    static GL_SAMPLE_LOCATION_SUBPIXEL_BITS_ARB: number;
    static glEvaluateDepthValuesARB(): void;
    static glFramebufferSampleLocationsfvARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glFramebufferSampleLocationsfvARB(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glNamedFramebufferSampleLocationsfvARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glNamedFramebufferSampleLocationsfvARB(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static nglFramebufferSampleLocationsfvARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglNamedFramebufferSampleLocationsfvARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}
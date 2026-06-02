import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVFramebufferMixedSamples extends Object {
    static GL_COLOR_SAMPLES_NV: number;
    static GL_COVERAGE_MODULATION_NV: number;
    static GL_COVERAGE_MODULATION_TABLE_NV: number;
    static GL_COVERAGE_MODULATION_TABLE_SIZE_NV: number;
    static GL_DEPTH_SAMPLES_NV: number;
    static GL_EFFECTIVE_RASTER_SAMPLES_EXT: number;
    static GL_MAX_RASTER_SAMPLES_EXT: number;
    static GL_MIXED_DEPTH_SAMPLES_SUPPORTED_NV: number;
    static GL_MIXED_STENCIL_SAMPLES_SUPPORTED_NV: number;
    static GL_MULTISAMPLE_RASTERIZATION_ALLOWED_EXT: number;
    static GL_RASTER_FIXED_SAMPLE_LOCATIONS_EXT: number;
    static GL_RASTER_MULTISAMPLE_EXT: number;
    static GL_RASTER_SAMPLES_EXT: number;
    static GL_STENCIL_SAMPLES_NV: number;
    static glCoverageModulationNV(paramarg0: number): void;
    static glCoverageModulationTableNV(paramarg0: number[]): void;
    static glCoverageModulationTableNV(paramarg0: FloatBuffer): void;
    static glGetCoverageModulationTableNV(paramarg0: number[]): void;
    static glGetCoverageModulationTableNV(paramarg0: FloatBuffer): void;
    static glRasterSamplesEXT(paramarg0: number, paramarg1: boolean): void;
    static nglCoverageModulationTableNV(paramarg0: number, paramarg1: number): void;
    static nglGetCoverageModulationTableNV(paramarg0: number, paramarg1: number): void;
    constructor()
}
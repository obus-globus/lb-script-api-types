import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBVertexBlend extends Object {
    static GL_ACTIVE_VERTEX_UNITS_ARB: number;
    static GL_CURRENT_WEIGHT_ARB: number;
    static GL_MAX_VERTEX_UNITS_ARB: number;
    static GL_MODELVIEW0_ARB: number;
    static GL_MODELVIEW10_ARB: number;
    static GL_MODELVIEW11_ARB: number;
    static GL_MODELVIEW12_ARB: number;
    static GL_MODELVIEW13_ARB: number;
    static GL_MODELVIEW14_ARB: number;
    static GL_MODELVIEW15_ARB: number;
    static GL_MODELVIEW16_ARB: number;
    static GL_MODELVIEW17_ARB: number;
    static GL_MODELVIEW18_ARB: number;
    static GL_MODELVIEW19_ARB: number;
    static GL_MODELVIEW1_ARB: number;
    static GL_MODELVIEW20_ARB: number;
    static GL_MODELVIEW21_ARB: number;
    static GL_MODELVIEW22_ARB: number;
    static GL_MODELVIEW23_ARB: number;
    static GL_MODELVIEW24_ARB: number;
    static GL_MODELVIEW25_ARB: number;
    static GL_MODELVIEW26_ARB: number;
    static GL_MODELVIEW27_ARB: number;
    static GL_MODELVIEW28_ARB: number;
    static GL_MODELVIEW29_ARB: number;
    static GL_MODELVIEW2_ARB: number;
    static GL_MODELVIEW30_ARB: number;
    static GL_MODELVIEW31_ARB: number;
    static GL_MODELVIEW3_ARB: number;
    static GL_MODELVIEW4_ARB: number;
    static GL_MODELVIEW5_ARB: number;
    static GL_MODELVIEW6_ARB: number;
    static GL_MODELVIEW7_ARB: number;
    static GL_MODELVIEW8_ARB: number;
    static GL_MODELVIEW9_ARB: number;
    static GL_VERTEX_BLEND_ARB: number;
    static GL_WEIGHT_ARRAY_ARB: number;
    static GL_WEIGHT_ARRAY_POINTER_ARB: number;
    static GL_WEIGHT_ARRAY_SIZE_ARB: number;
    static GL_WEIGHT_ARRAY_STRIDE_ARB: number;
    static GL_WEIGHT_ARRAY_TYPE_ARB: number;
    static GL_WEIGHT_SUM_UNITY_ARB: number;
    static glVertexBlendARB(paramarg0: number): void;
    static glWeightPointerARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glWeightPointerARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glWeightPointerARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): void;
    static glWeightPointerARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: FloatBuffer): void;
    static glWeightPointerARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glWeightPointerARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ShortBuffer): void;
    static glWeightPointerARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glWeightPointerARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glWeightbvARB(paramarg0: ByteBuffer): void;
    static glWeightdvARB(paramarg0: number[]): void;
    static glWeightdvARB(paramarg0: DoubleBuffer): void;
    static glWeightfvARB(paramarg0: number[]): void;
    static glWeightfvARB(paramarg0: FloatBuffer): void;
    static glWeightivARB(paramarg0: number[]): void;
    static glWeightivARB(paramarg0: IntBuffer): void;
    static glWeightsvARB(paramarg0: ShortBuffer): void;
    static glWeightsvARB(paramarg0: number[]): void;
    static glWeightubvARB(paramarg0: ByteBuffer): void;
    static glWeightuivARB(paramarg0: number[]): void;
    static glWeightuivARB(paramarg0: IntBuffer): void;
    static glWeightusvARB(paramarg0: ShortBuffer): void;
    static glWeightusvARB(paramarg0: number[]): void;
    static nglWeightPointerARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglWeightbvARB(paramarg0: number, paramarg1: number): void;
    static nglWeightdvARB(paramarg0: number, paramarg1: number): void;
    static nglWeightfvARB(paramarg0: number, paramarg1: number): void;
    static nglWeightivARB(paramarg0: number, paramarg1: number): void;
    static nglWeightsvARB(paramarg0: number, paramarg1: number): void;
    static nglWeightubvARB(paramarg0: number, paramarg1: number): void;
    static nglWeightuivARB(paramarg0: number, paramarg1: number): void;
    static nglWeightusvARB(paramarg0: number, paramarg1: number): void;
    constructor()
}
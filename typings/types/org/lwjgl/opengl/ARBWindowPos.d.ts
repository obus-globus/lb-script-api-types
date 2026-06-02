import type { DoubleBuffer } from '../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBWindowPos extends Object {
    static glWindowPos2dARB(paramarg0: number, paramarg1: number): void;
    static glWindowPos2dvARB(paramarg0: number[]): void;
    static glWindowPos2dvARB(paramarg0: DoubleBuffer): void;
    static glWindowPos2fARB(paramarg0: number, paramarg1: number): void;
    static glWindowPos2fvARB(paramarg0: number[]): void;
    static glWindowPos2fvARB(paramarg0: FloatBuffer): void;
    static glWindowPos2iARB(paramarg0: number, paramarg1: number): void;
    static glWindowPos2ivARB(paramarg0: number[]): void;
    static glWindowPos2ivARB(paramarg0: IntBuffer): void;
    static glWindowPos2sARB(paramarg0: number, paramarg1: number): void;
    static glWindowPos2svARB(paramarg0: ShortBuffer): void;
    static glWindowPos2svARB(paramarg0: number[]): void;
    static glWindowPos3dARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glWindowPos3dvARB(paramarg0: number[]): void;
    static glWindowPos3dvARB(paramarg0: DoubleBuffer): void;
    static glWindowPos3fARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glWindowPos3fvARB(paramarg0: number[]): void;
    static glWindowPos3fvARB(paramarg0: FloatBuffer): void;
    static glWindowPos3iARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glWindowPos3ivARB(paramarg0: number[]): void;
    static glWindowPos3ivARB(paramarg0: IntBuffer): void;
    static glWindowPos3sARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glWindowPos3svARB(paramarg0: ShortBuffer): void;
    static glWindowPos3svARB(paramarg0: number[]): void;
    static nglWindowPos2dvARB(paramarg0: number): void;
    static nglWindowPos2fvARB(paramarg0: number): void;
    static nglWindowPos2ivARB(paramarg0: number): void;
    static nglWindowPos2svARB(paramarg0: number): void;
    static nglWindowPos3dvARB(paramarg0: number): void;
    static nglWindowPos3fvARB(paramarg0: number): void;
    static nglWindowPos3ivARB(paramarg0: number): void;
    static nglWindowPos3svARB(paramarg0: number): void;
    constructor()
}
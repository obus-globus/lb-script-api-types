import type { Buffer } from '../../../java/nio/Buffer.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { CustomBuffer } from '../../../org/lwjgl/system/CustomBuffer.d.ts'
import type { FunctionProvider } from '../../../org/lwjgl/system/FunctionProvider.d.ts'
import type { FunctionProviderLocal } from '../../../org/lwjgl/system/FunctionProviderLocal.d.ts'
export class Checks extends Object {
    static CHECKS: boolean;
    static DEBUG: boolean;
    static DEBUG_FUNCTIONS: boolean;
    static check(paramarg0: number, paramarg1: number): number;
    static check(paramarg0: number): number;
    static check(paramarg0: number[], paramarg1: number): void;
    static check(paramarg0: CharSequence, paramarg1: number): void;
    static check(paramarg0: Object[], paramarg1: number): void;
    static check(paramarg0: Buffer, paramarg1: number): void;
    static check(paramarg0: CustomBuffer<any>, paramarg1: number): void;
    static checkFunctions(...paramarg0: number[]): boolean;
    static checkFunctions(paramarg0: (param0: ByteBuffer) => number, paramarg1: number[], paramarg2: number[], ...paramarg3: string[]): boolean;
    static checkFunctions(paramarg0: (param0: ByteBuffer) => number, paramarg1: PointerBuffer, paramarg2: number[], ...paramarg3: string[]): boolean;
    static checkFunctions(paramarg0: FunctionProviderLocal, paramarg1: number, paramarg2: PointerBuffer, paramarg3: number[], ...paramarg4: string[]): boolean;
    static checkGT(paramarg0: Buffer, paramarg1: number): void;
    static checkGT(paramarg0: CustomBuffer<any>, paramarg1: number): void;
    static checkMemcpy(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static checkNT(paramarg0: number[]): void;
    static checkNT(paramarg0: number[], paramarg1: number): void;
    static checkNT(paramarg0: FloatBuffer): void;
    static checkNT(paramarg0: IntBuffer): void;
    static checkNT(paramarg0: IntBuffer, paramarg1: number): void;
    static checkNT(paramarg0: LongBuffer): void;
    static checkNT(paramarg0: PointerBuffer): void;
    static checkNT(paramarg0: PointerBuffer, paramarg1: number): void;
    static checkNT1(paramarg0: ByteBuffer): void;
    static checkNT1Safe(paramarg0: ByteBuffer): void;
    static checkNT2(paramarg0: ByteBuffer): void;
    static checkNT2Safe(paramarg0: ByteBuffer): void;
    static checkNTSafe(paramarg0: number[]): void;
    static checkNTSafe(paramarg0: number[], paramarg1: number): void;
    static checkNTSafe(paramarg0: FloatBuffer): void;
    static checkNTSafe(paramarg0: IntBuffer): void;
    static checkNTSafe(paramarg0: IntBuffer, paramarg1: number): void;
    static checkNTSafe(paramarg0: LongBuffer): void;
    static checkNTSafe(paramarg0: PointerBuffer): void;
    static checkNTSafe(paramarg0: PointerBuffer, paramarg1: number): void;
    static checkSafe(paramarg0: number[], paramarg1: number): void;
    static checkSafe(paramarg0: Buffer, paramarg1: number): void;
    static checkSafe(paramarg0: CustomBuffer<any>, paramarg1: number): void;
    static lengthSafe(paramarg0: number[]): number;
    static remainingSafe(paramarg0: Buffer): number;
    static remainingSafe(paramarg0: CustomBuffer<any>): number;
    static reportMissing(paramarg0: string, paramarg1: string): boolean;
    private constructor()
}
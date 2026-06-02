import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EGLCapabilities } from '../../../org/lwjgl/egl/EGLCapabilities.d.ts'
import type { FunctionProvider } from '../../../org/lwjgl/system/FunctionProvider.d.ts'
export class EGL extends Object {
    static create(): void;
    static create(paramarg0: string): void;
    static create(paramarg0: (param0: ByteBuffer) => kotlin.Long): void;
    static createDisplayCapabilities(paramarg0: number): EGLCapabilities;
    static createDisplayCapabilities(paramarg0: number, paramarg1: number, paramarg2: number): EGLCapabilities;
    static destroy(): void;
    static getCapabilities(): EGLCapabilities;
    static getFunctionProvider(): (param0: ByteBuffer) => kotlin.Long;
    private constructor()
}
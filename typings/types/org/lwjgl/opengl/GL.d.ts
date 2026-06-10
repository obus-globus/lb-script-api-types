import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { GLCapabilities } from '../../../org/lwjgl/opengl/GLCapabilities.d.ts'
import type { GLXCapabilities } from '../../../org/lwjgl/opengl/GLXCapabilities.d.ts'
import type { WGLCapabilities } from '../../../org/lwjgl/opengl/WGLCapabilities.d.ts'
import type { FunctionProvider } from '../../../org/lwjgl/system/FunctionProvider.d.ts'
export class GL extends Object {
    static create(): void;
    static create(paramarg0: string): void;
    static create(paramarg0: (param0: ByteBuffer) => number): void;
    static createCapabilities(): GLCapabilities;
    static createCapabilities(paramarg0: boolean): GLCapabilities;
    static createCapabilities(paramarg0: boolean, paramarg1: (param0: number) => PointerBuffer): GLCapabilities;
    static createCapabilities(paramarg0: (param0: number) => PointerBuffer): GLCapabilities;
    static createCapabilitiesGLX(paramarg0: number): GLXCapabilities;
    static createCapabilitiesGLX(paramarg0: number, paramarg1: number): GLXCapabilities;
    static createCapabilitiesWGL(): WGLCapabilities;
    static destroy(): void;
    static getCapabilities(): GLCapabilities;
    static getCapabilitiesGLX(): GLXCapabilities;
    static getCapabilitiesWGL(): WGLCapabilities;
    static getFunctionProvider(): (param0: ByteBuffer) => number;
    static setCapabilities(paramarg0: GLCapabilities): void;
    private constructor()
}
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FunctionProvider } from '../../../org/lwjgl/system/FunctionProvider.d.ts'
export class VK extends Object {
    static create(): void;
    static create(paramarg0: string): void;
    static create(paramarg0: (param0: ByteBuffer) => number): void;
    static destroy(): void;
    static getFunctionProvider(): (param0: ByteBuffer) => number;
    static getInstanceVersionSupported(): number;
    private constructor()
}
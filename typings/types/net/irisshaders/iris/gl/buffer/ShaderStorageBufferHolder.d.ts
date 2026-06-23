import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ShaderStorageBuffer } from '../../../../../net/irisshaders/iris/gl/buffer/ShaderStorageBuffer.d.ts'
export class ShaderStorageBufferHolder extends Object {
    static forceDeleteBuffers(): void;
    constructor(arg0: { [key: string]: any }, arg1: number, arg2: number)
    // private buffers: ShaderStorageBuffer[];
    // private cachedHeight: number;
    // private cachedWidth: number;
    // private destroyed: boolean;
    destroyBuffers(): void;
    getBufferIndex(arg0: number): number;
    hasResizedScreen(arg0: number, arg1: number): void;
    setupBuffers(): void;
}
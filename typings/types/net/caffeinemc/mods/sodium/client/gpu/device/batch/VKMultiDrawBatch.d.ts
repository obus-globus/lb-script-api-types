import type { MultiDrawBatch } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/device/batch/MultiDrawBatch.d.ts'
import type { DrawContext } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/device/context/DrawContext.d.ts'
export class VKMultiDrawBatch extends MultiDrawBatch {
    static newBatch(paramarg0: number): MultiDrawBatch;
    constructor(arg0: number)
    // private pCommands: number;
    delete(): void;
    draw(arg0: DrawContext): void;
    getIndexBufferSize(): number;
    put(arg0: number, arg1: number, arg2: number, arg3: number): void;
}
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DrawContext } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/device/context/DrawContext.d.ts'
export abstract class MultiDrawBatch extends Object {
    static newBatch(paramarg0: number): MultiDrawBatch;
    constructor()
    isFilled: boolean;
    size: number;
    clear(): void;
    delete(): void;
    draw(arg0: DrawContext): void;
    getIndexBufferSize(): number;
    isEmpty(): boolean;
    put(arg0: number, arg1: number, arg2: number, arg3: number): void;
}
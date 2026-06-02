import type { GpuFence } from '../../../../com/mojang/blaze3d/buffers/GpuFence.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RenderSystem$GpuAsyncTask extends Record {
    constructor(callback: () => void, fence: GpuFence)
    // private callback: () => void;
    // private fence: GpuFence;
    callback(): () => void;
    equals(o: Object | null): boolean;
    fence(): GpuFence;
    hashCode(): number;
    toString(): string;
}
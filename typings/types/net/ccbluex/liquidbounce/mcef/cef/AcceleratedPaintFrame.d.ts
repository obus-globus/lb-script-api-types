import type { GpuTexture } from '../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AcceleratedPaintFrame extends Record implements AutoCloseable {
    constructor(texture: GpuTexture, bgra: boolean, releaseAction: () => void)
    // private bgra: boolean;
    // private releaseAction: () => void;
    // private texture: GpuTexture;
    bgra(): boolean;
    close(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    releaseAction(): () => void;
    texture(): GpuTexture;
    toString(): string;
}
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DeltaTracker } from '../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class GlobalSettingsUniform extends Object implements AutoCloseable {
    static UBO_SIZE: number;
    constructor()
    // private buffer: GpuBuffer;
    close(): void;
    update(width: number, height: number, glintAlpha: number, gameTime: number, deltaTracker: DeltaTracker, menuBlurRadius: number, cameraPos: Vec3, useRgss: boolean): void;
}
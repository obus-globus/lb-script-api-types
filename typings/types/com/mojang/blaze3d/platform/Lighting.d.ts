import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { Lighting$Entry } from '../../../../com/mojang/blaze3d/platform/Lighting$Entry.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CardinalLighting$Type } from '../../../../net/minecraft/world/level/CardinalLighting$Type.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class Lighting extends Object implements AutoCloseable {
    static UBO_SIZE: number;
    constructor()
    // private buffer: GpuBuffer;
    // private paddedSize: number;
    close(): void;
    setupFor(entry: Lighting$Entry): void;
    // private updateBuffer(entry: Lighting$Entry, light0: Vector3fc, light1: Vector3fc): void;
    updateLevel(type: CardinalLighting$Type): void;
}
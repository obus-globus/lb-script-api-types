import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { ResourceDescriptor } from '../../../../com/mojang/blaze3d/resource/ResourceDescriptor.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vector4fc } from '../../../../org/joml/Vector4fc.d.ts'
export class RenderTargetDescriptor extends Record implements ResourceDescriptor<RenderTarget> {
    constructor(width: number, height: number, useDepth: boolean, clearColor: Vector4fc, format: GpuFormat)
    // private clearColor: Vector4fc;
    // private format: GpuFormat;
    // private height: number;
    // private useDepth: boolean;
    // private width: number;
    allocate(): RenderTarget;
    canUsePhysicalResource(other: ResourceDescriptor<Object>): boolean;
    clearColor(): Vector4fc;
    equals(o: Object | null): boolean;
    format(): GpuFormat;
    free(resource: RenderTarget): void;
    hashCode(): number;
    height(): number;
    prepare(resource: RenderTarget): void;
    toString(): string;
    useDepth(): boolean;
    width(): number;
}
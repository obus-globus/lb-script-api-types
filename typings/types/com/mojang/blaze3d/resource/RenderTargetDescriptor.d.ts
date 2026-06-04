import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { ResourceDescriptor } from '../../../../com/mojang/blaze3d/resource/ResourceDescriptor.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RenderTargetDescriptor extends Record implements ResourceDescriptor<RenderTarget> {
    // private clearColor: number;
    // private height: number;
    // private useDepth: boolean;
    // private width: number;
    allocate(): RenderTarget;
    canUsePhysicalResource(other: ResourceDescriptor<Object>): boolean;
    clearColor(): number;
    equals(o: Object | null): boolean;
    free(resource: RenderTarget): void;
    hashCode(): number;
    height(): number;
    prepare(resource: RenderTarget): void;
    prepare<T extends Object | number | string | boolean>(resource: T): void;
    toString(): string;
    useDepth(): boolean;
    width(): number;
}
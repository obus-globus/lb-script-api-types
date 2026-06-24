import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { PrimitiveTopology } from '../../../../com/mojang/blaze3d/PrimitiveTopology.d.ts'
import type { ColorTargetState } from '../../../../com/mojang/blaze3d/pipeline/ColorTargetState.d.ts'
import type { BlendFactor } from '../../../../com/mojang/blaze3d/platform/BlendFactor.d.ts'
import type { BlendOp } from '../../../../com/mojang/blaze3d/platform/BlendOp.d.ts'
import type { CompareOp } from '../../../../com/mojang/blaze3d/platform/CompareOp.d.ts'
import type { PolygonMode } from '../../../../com/mojang/blaze3d/platform/PolygonMode.d.ts'
import type { GpuSurface$PresentMode } from '../../../../com/mojang/blaze3d/systems/GpuSurface$PresentMode.d.ts'
import type { AddressMode } from '../../../../com/mojang/blaze3d/textures/AddressMode.d.ts'
import type { FilterMode } from '../../../../com/mojang/blaze3d/textures/FilterMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VulkanConst extends Object {
    static bufferUsageToVk(paramusage: number): number;
    static formatAspectMask(paramformat: GpuFormat): number;
    static textureUsageToVk(paramusage: number, paramformat: GpuFormat): number;
    static toVk(paramformat: GpuFormat): number;
    static toVk(paramprimitiveTopology: PrimitiveTopology): number;
    static toVk(paramcolorTargetState: ColorTargetState): number;
    static toVk(paramfactor: BlendFactor): number;
    static toVk(paramblendOp: BlendOp): number;
    static toVk(paramop: CompareOp): number;
    static toVk(parampolygonMode: PolygonMode): number;
    static toVk(parammode: GpuSurface$PresentMode): number;
    static toVk(paramaddressMode: AddressMode): number;
    static toVk(paramfilter: FilterMode): number;
    constructor()
}
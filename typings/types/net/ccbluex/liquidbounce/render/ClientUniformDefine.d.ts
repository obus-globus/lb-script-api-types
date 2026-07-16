import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { BindGroupLayout } from '../../../../com/mojang/blaze3d/pipeline/BindGroupLayout.d.ts'
import type { BindGroupLayout$Builder } from '../../../../com/mojang/blaze3d/pipeline/BindGroupLayout$Builder.d.ts'
import type { RenderPass } from '../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { MappableRingBuffer } from '../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
export class ClientUniformDefine extends Enum<ClientUniformDefine> {
    static BLEND: ClientUniformDefine;
    static DISTANCE_FADE: ClientUniformDefine;
    static GUI_BLUR: ClientUniformDefine;
    static GUI_BLUR_KERNEL: ClientUniformDefine;
    static HAND_ITEM_LIGHTMAP: ClientUniformDefine;
    static MESH_BASE_BLOCK_POS: ClientUniformDefine;
    static ROUNDED_RECT: ClientUniformDefine;
    static THEME_BACKGROUND: ClientUniformDefine;
    static getEntries(): ClientUniformDefine[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ClientUniformDefine;
    static values(): ClientUniformDefine[];
    private constructor(uboName: string, size: number)
    readonly bindGroupLayout: BindGroupLayout;
    readonly size: number;
    readonly uboName: string;
    appendTo(builder: BindGroupLayout$Builder): BindGroupLayout$Builder;
    createRingBuffer(labelGetter: () => string): MappableRingBuffer;
    createSingleBuffer(labelGetter: () => string): GpuBufferSlice;
    label(): string;
    setTo(renderPass: RenderPass, slice: GpuBufferSlice): void;
    name(): "DISTANCE_FADE" | "MESH_BASE_BLOCK_POS" | "ROUNDED_RECT" | "HAND_ITEM_LIGHTMAP" | "GUI_BLUR" | "GUI_BLUR_KERNEL" | "BLEND" | "THEME_BACKGROUND";
}
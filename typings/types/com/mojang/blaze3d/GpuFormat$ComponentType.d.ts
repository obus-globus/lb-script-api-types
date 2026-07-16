import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class GpuFormat$ComponentType extends Enum<GpuFormat$ComponentType> {
    static FLOAT_16: GpuFormat$ComponentType;
    static FLOAT_32: GpuFormat$ComponentType;
    static OPAQUE_16: GpuFormat$ComponentType;
    static OPAQUE_32: GpuFormat$ComponentType;
    static OPAQUE_64: GpuFormat$ComponentType;
    static OPAQUE_8: GpuFormat$ComponentType;
    static SINT_16: GpuFormat$ComponentType;
    static SINT_32: GpuFormat$ComponentType;
    static SINT_8: GpuFormat$ComponentType;
    static SNORM_16: GpuFormat$ComponentType;
    static SNORM_8: GpuFormat$ComponentType;
    static UINT_16: GpuFormat$ComponentType;
    static UINT_32: GpuFormat$ComponentType;
    static UINT_8: GpuFormat$ComponentType;
    static UNORM_16: GpuFormat$ComponentType;
    static UNORM_8: GpuFormat$ComponentType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GpuFormat$ComponentType;
    static values(): GpuFormat$ComponentType[];
    private constructor(byteSize: number)
    // private byteSize: number;
    byteSize(): number;
    name(): "UNORM_8" | "SNORM_8" | "UINT_8" | "SINT_8" | "UNORM_16" | "SNORM_16" | "UINT_16" | "SINT_16" | "FLOAT_16" | "UINT_32" | "SINT_32" | "FLOAT_32" | "OPAQUE_8" | "OPAQUE_16" | "OPAQUE_32" | "OPAQUE_64";
}
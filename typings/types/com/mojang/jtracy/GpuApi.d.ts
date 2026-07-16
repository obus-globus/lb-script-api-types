import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class GpuApi extends Enum<GpuApi> {
    static DIRECT3D_11: GpuApi;
    static DIRECT3D_12: GpuApi;
    static INVALID: GpuApi;
    static OPENCL: GpuApi;
    static OPENGL: GpuApi;
    static VULKAN: GpuApi;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GpuApi;
    static values(): GpuApi[];
    private constructor(arg2: number)
    // private id: number;
    getId(): number;
    name(): "INVALID" | "OPENGL" | "VULKAN" | "OPENCL" | "DIRECT3D_12" | "DIRECT3D_11";
}
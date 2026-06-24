import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkTraceRaysIndirectCommand2KHR extends Struct<VkTraceRaysIndirectCommand2KHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CALLABLESHADERBINDINGTABLEADDRESS: number;
    static CALLABLESHADERBINDINGTABLESIZE: number;
    static CALLABLESHADERBINDINGTABLESTRIDE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPTH: number;
    static HEIGHT: number;
    static HITSHADERBINDINGTABLEADDRESS: number;
    static HITSHADERBINDINGTABLESIZE: number;
    static HITSHADERBINDINGTABLESTRIDE: number;
    static MISSSHADERBINDINGTABLEADDRESS: number;
    static MISSSHADERBINDINGTABLESIZE: number;
    static MISSSHADERBINDINGTABLESTRIDE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RAYGENSHADERRECORDADDRESS: number;
    static RAYGENSHADERRECORDSIZE: number;
    static SIZEOF: number;
    static WIDTH: number;
    static calloc(): VkTraceRaysIndirectCommand2KHR;
    static calloc(paramarg0: MemoryStack): VkTraceRaysIndirectCommand2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkTraceRaysIndirectCommand2KHR;
    static create(paramarg0: number): VkTraceRaysIndirectCommand2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkTraceRaysIndirectCommand2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkTraceRaysIndirectCommand2KHR;
    static malloc(paramarg0: MemoryStack): VkTraceRaysIndirectCommand2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncallableShaderBindingTableAddress(paramarg0: number): number;
    static ncallableShaderBindingTableAddress(paramarg0: number, paramarg1: number): void;
    static ncallableShaderBindingTableSize(paramarg0: number): number;
    static ncallableShaderBindingTableSize(paramarg0: number, paramarg1: number): void;
    static ncallableShaderBindingTableStride(paramarg0: number): number;
    static ncallableShaderBindingTableStride(paramarg0: number, paramarg1: number): void;
    static ndepth(paramarg0: number): number;
    static ndepth(paramarg0: number, paramarg1: number): void;
    static nheight(paramarg0: number): number;
    static nheight(paramarg0: number, paramarg1: number): void;
    static nhitShaderBindingTableAddress(paramarg0: number): number;
    static nhitShaderBindingTableAddress(paramarg0: number, paramarg1: number): void;
    static nhitShaderBindingTableSize(paramarg0: number): number;
    static nhitShaderBindingTableSize(paramarg0: number, paramarg1: number): void;
    static nhitShaderBindingTableStride(paramarg0: number): number;
    static nhitShaderBindingTableStride(paramarg0: number, paramarg1: number): void;
    static nmissShaderBindingTableAddress(paramarg0: number): number;
    static nmissShaderBindingTableAddress(paramarg0: number, paramarg1: number): void;
    static nmissShaderBindingTableSize(paramarg0: number): number;
    static nmissShaderBindingTableSize(paramarg0: number, paramarg1: number): void;
    static nmissShaderBindingTableStride(paramarg0: number): number;
    static nmissShaderBindingTableStride(paramarg0: number, paramarg1: number): void;
    static nraygenShaderRecordAddress(paramarg0: number): number;
    static nraygenShaderRecordAddress(paramarg0: number, paramarg1: number): void;
    static nraygenShaderRecordSize(paramarg0: number): number;
    static nraygenShaderRecordSize(paramarg0: number, paramarg1: number): void;
    static nwidth(paramarg0: number): number;
    static nwidth(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    callableShaderBindingTableAddress(): number;
    callableShaderBindingTableAddress(arg0: number): VkTraceRaysIndirectCommand2KHR;
    callableShaderBindingTableSize(): number;
    callableShaderBindingTableSize(arg0: number): VkTraceRaysIndirectCommand2KHR;
    callableShaderBindingTableStride(): number;
    callableShaderBindingTableStride(arg0: number): VkTraceRaysIndirectCommand2KHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkTraceRaysIndirectCommand2KHR;
    depth(): number;
    depth(arg0: number): VkTraceRaysIndirectCommand2KHR;
    height(): number;
    height(arg0: number): VkTraceRaysIndirectCommand2KHR;
    hitShaderBindingTableAddress(): number;
    hitShaderBindingTableAddress(arg0: number): VkTraceRaysIndirectCommand2KHR;
    hitShaderBindingTableSize(): number;
    hitShaderBindingTableSize(arg0: number): VkTraceRaysIndirectCommand2KHR;
    hitShaderBindingTableStride(): number;
    hitShaderBindingTableStride(arg0: number): VkTraceRaysIndirectCommand2KHR;
    missShaderBindingTableAddress(): number;
    missShaderBindingTableAddress(arg0: number): VkTraceRaysIndirectCommand2KHR;
    missShaderBindingTableSize(): number;
    missShaderBindingTableSize(arg0: number): VkTraceRaysIndirectCommand2KHR;
    missShaderBindingTableStride(): number;
    missShaderBindingTableStride(arg0: number): VkTraceRaysIndirectCommand2KHR;
    raygenShaderRecordAddress(): number;
    raygenShaderRecordAddress(arg0: number): VkTraceRaysIndirectCommand2KHR;
    raygenShaderRecordSize(): number;
    raygenShaderRecordSize(arg0: number): VkTraceRaysIndirectCommand2KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): VkTraceRaysIndirectCommand2KHR;
    set(arg0: VkTraceRaysIndirectCommand2KHR): VkTraceRaysIndirectCommand2KHR;
    sizeof(): number;
    width(): number;
    width(arg0: number): VkTraceRaysIndirectCommand2KHR;
}
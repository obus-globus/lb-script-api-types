import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkClusterAccelerationStructureOpInputNV } from '../../../org/lwjgl/vulkan/VkClusterAccelerationStructureOpInputNV.d.ts'
export class VkClusterAccelerationStructureInputInfoNV extends Struct<VkClusterAccelerationStructureInputInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MAXACCELERATIONSTRUCTURECOUNT: number;
    static OPINPUT: number;
    static OPMODE: number;
    static OPTYPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkClusterAccelerationStructureInputInfoNV;
    static calloc(paramarg0: MemoryStack): VkClusterAccelerationStructureInputInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkClusterAccelerationStructureInputInfoNV;
    static create(paramarg0: number): VkClusterAccelerationStructureInputInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkClusterAccelerationStructureInputInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkClusterAccelerationStructureInputInfoNV;
    static malloc(paramarg0: MemoryStack): VkClusterAccelerationStructureInputInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmaxAccelerationStructureCount(paramarg0: number): number;
    static nmaxAccelerationStructureCount(paramarg0: number, paramarg1: number): void;
    static nopInput(paramarg0: number): VkClusterAccelerationStructureOpInputNV;
    static nopInput(paramarg0: number, paramarg1: VkClusterAccelerationStructureOpInputNV): void;
    static nopMode(paramarg0: number): number;
    static nopMode(paramarg0: number, paramarg1: number): void;
    static nopType(paramarg0: number): number;
    static nopType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkClusterAccelerationStructureInputInfoNV;
    flags(): number;
    flags(arg0: number): VkClusterAccelerationStructureInputInfoNV;
    maxAccelerationStructureCount(): number;
    maxAccelerationStructureCount(arg0: number): VkClusterAccelerationStructureInputInfoNV;
    opInput(): VkClusterAccelerationStructureOpInputNV;
    opInput(arg0: (param0: VkClusterAccelerationStructureOpInputNV) => void): VkClusterAccelerationStructureInputInfoNV;
    opInput(arg0: VkClusterAccelerationStructureOpInputNV): VkClusterAccelerationStructureInputInfoNV;
    opMode(): number;
    opMode(arg0: number): VkClusterAccelerationStructureInputInfoNV;
    opType(): number;
    opType(arg0: number): VkClusterAccelerationStructureInputInfoNV;
    pNext(): number;
    pNext(arg0: number): VkClusterAccelerationStructureInputInfoNV;
    sType(): number;
    sType(arg0: number): VkClusterAccelerationStructureInputInfoNV;
    sType$Default(): VkClusterAccelerationStructureInputInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: VkClusterAccelerationStructureOpInputNV): VkClusterAccelerationStructureInputInfoNV;
    set(arg0: VkClusterAccelerationStructureInputInfoNV): VkClusterAccelerationStructureInputInfoNV;
    sizeof(): number;
}
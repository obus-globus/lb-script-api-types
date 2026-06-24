import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkValidationFlagsEXT extends Struct<VkValidationFlagsEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISABLEDVALIDATIONCHECKCOUNT: number;
    static PDISABLEDVALIDATIONCHECKS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkValidationFlagsEXT;
    static calloc(paramarg0: MemoryStack): VkValidationFlagsEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkValidationFlagsEXT;
    static create(paramarg0: number): VkValidationFlagsEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkValidationFlagsEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkValidationFlagsEXT;
    static malloc(paramarg0: MemoryStack): VkValidationFlagsEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndisabledValidationCheckCount(paramarg0: number): number;
    static ndisabledValidationCheckCount(paramarg0: number, paramarg1: number): void;
    static npDisabledValidationChecks(paramarg0: number): IntBuffer;
    static npDisabledValidationChecks(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkValidationFlagsEXT;
    disabledValidationCheckCount(): number;
    pDisabledValidationChecks(): IntBuffer;
    pDisabledValidationChecks(arg0: IntBuffer): VkValidationFlagsEXT;
    pNext(): number;
    pNext(arg0: number): VkValidationFlagsEXT;
    sType(): number;
    sType(arg0: number): VkValidationFlagsEXT;
    sType$Default(): VkValidationFlagsEXT;
    set(arg0: number, arg1: number, arg2: IntBuffer): VkValidationFlagsEXT;
    set(arg0: VkValidationFlagsEXT): VkValidationFlagsEXT;
    sizeof(): number;
}
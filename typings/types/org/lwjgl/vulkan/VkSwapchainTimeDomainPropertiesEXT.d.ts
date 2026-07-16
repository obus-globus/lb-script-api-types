import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSwapchainTimeDomainPropertiesEXT extends Struct<VkSwapchainTimeDomainPropertiesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTIMEDOMAINIDS: number;
    static PTIMEDOMAINS: number;
    static SIZEOF: number;
    static STYPE: number;
    static TIMEDOMAINCOUNT: number;
    static calloc(): VkSwapchainTimeDomainPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkSwapchainTimeDomainPropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSwapchainTimeDomainPropertiesEXT;
    static create(paramarg0: number): VkSwapchainTimeDomainPropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSwapchainTimeDomainPropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSwapchainTimeDomainPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkSwapchainTimeDomainPropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npTimeDomainIds(paramarg0: number): LongBuffer;
    static npTimeDomains(paramarg0: number): IntBuffer;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntimeDomainCount(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSwapchainTimeDomainPropertiesEXT;
    pNext(): number;
    pNext(arg0: number): VkSwapchainTimeDomainPropertiesEXT;
    pTimeDomainIds(): LongBuffer;
    pTimeDomains(): IntBuffer;
    sType(): number;
    sType(arg0: number): VkSwapchainTimeDomainPropertiesEXT;
    sType$Default(): VkSwapchainTimeDomainPropertiesEXT;
    set(arg0: number, arg1: number): VkSwapchainTimeDomainPropertiesEXT;
    set(arg0: VkSwapchainTimeDomainPropertiesEXT): VkSwapchainTimeDomainPropertiesEXT;
    sizeof(): number;
    timeDomainCount(): number;
}
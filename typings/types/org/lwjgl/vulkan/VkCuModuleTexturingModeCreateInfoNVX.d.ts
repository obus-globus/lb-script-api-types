import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCuModuleTexturingModeCreateInfoNVX extends Struct<VkCuModuleTexturingModeCreateInfoNVX> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static USE64BITTEXTURING: number;
    static calloc(): VkCuModuleTexturingModeCreateInfoNVX;
    static calloc(paramarg0: MemoryStack): VkCuModuleTexturingModeCreateInfoNVX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCuModuleTexturingModeCreateInfoNVX;
    static create(paramarg0: number): VkCuModuleTexturingModeCreateInfoNVX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCuModuleTexturingModeCreateInfoNVX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCuModuleTexturingModeCreateInfoNVX;
    static malloc(paramarg0: MemoryStack): VkCuModuleTexturingModeCreateInfoNVX;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nuse64bitTexturing(paramarg0: number): number;
    static nuse64bitTexturing(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCuModuleTexturingModeCreateInfoNVX;
    pNext(): number;
    pNext(arg0: number): VkCuModuleTexturingModeCreateInfoNVX;
    sType(): number;
    sType(arg0: number): VkCuModuleTexturingModeCreateInfoNVX;
    sType$Default(): VkCuModuleTexturingModeCreateInfoNVX;
    set(arg0: number, arg1: number, arg2: boolean): VkCuModuleTexturingModeCreateInfoNVX;
    set(arg0: VkCuModuleTexturingModeCreateInfoNVX): VkCuModuleTexturingModeCreateInfoNVX;
    sizeof(): number;
    use64bitTexturing(): boolean;
    use64bitTexturing(arg0: boolean): VkCuModuleTexturingModeCreateInfoNVX;
}
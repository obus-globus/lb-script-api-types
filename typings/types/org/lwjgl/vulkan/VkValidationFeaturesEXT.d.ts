import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkValidationFeaturesEXT extends Struct<VkValidationFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISABLEDVALIDATIONFEATURECOUNT: number;
    static ENABLEDVALIDATIONFEATURECOUNT: number;
    static PDISABLEDVALIDATIONFEATURES: number;
    static PENABLEDVALIDATIONFEATURES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkValidationFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkValidationFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkValidationFeaturesEXT;
    static create(paramarg0: number): VkValidationFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkValidationFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkValidationFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkValidationFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndisabledValidationFeatureCount(paramarg0: number): number;
    static ndisabledValidationFeatureCount(paramarg0: number, paramarg1: number): void;
    static nenabledValidationFeatureCount(paramarg0: number): number;
    static nenabledValidationFeatureCount(paramarg0: number, paramarg1: number): void;
    static npDisabledValidationFeatures(paramarg0: number): IntBuffer;
    static npDisabledValidationFeatures(paramarg0: number, paramarg1: IntBuffer): void;
    static npEnabledValidationFeatures(paramarg0: number): IntBuffer;
    static npEnabledValidationFeatures(paramarg0: number, paramarg1: IntBuffer): void;
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
    create(arg0: number, arg1: ByteBuffer): VkValidationFeaturesEXT;
    disabledValidationFeatureCount(): number;
    enabledValidationFeatureCount(): number;
    pDisabledValidationFeatures(): IntBuffer;
    pDisabledValidationFeatures(arg0: IntBuffer): VkValidationFeaturesEXT;
    pEnabledValidationFeatures(): IntBuffer;
    pEnabledValidationFeatures(arg0: IntBuffer): VkValidationFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkValidationFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkValidationFeaturesEXT;
    sType$Default(): VkValidationFeaturesEXT;
    set(arg0: number, arg1: number, arg2: IntBuffer, arg3: IntBuffer): VkValidationFeaturesEXT;
    set(arg0: VkValidationFeaturesEXT): VkValidationFeaturesEXT;
    sizeof(): number;
}
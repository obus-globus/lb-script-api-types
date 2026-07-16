import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkLayerSettingEXT extends Struct<VkLayerSettingEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PLAYERNAME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSETTINGNAME: number;
    static PVALUES: number;
    static SIZEOF: number;
    static TYPE: number;
    static VALUECOUNT: number;
    static calloc(): VkLayerSettingEXT;
    static calloc(paramarg0: MemoryStack): VkLayerSettingEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkLayerSettingEXT;
    static create(paramarg0: number): VkLayerSettingEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkLayerSettingEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkLayerSettingEXT;
    static malloc(paramarg0: MemoryStack): VkLayerSettingEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npLayerName(paramarg0: number): ByteBuffer;
    static npLayerName(paramarg0: number, paramarg1: ByteBuffer): void;
    static npLayerNameString(paramarg0: number): string;
    static npSettingName(paramarg0: number): ByteBuffer;
    static npSettingName(paramarg0: number, paramarg1: ByteBuffer): void;
    static npSettingNameString(paramarg0: number): string;
    static npValues(paramarg0: number, paramarg1: number): ByteBuffer;
    static npValues(paramarg0: number, paramarg1: ByteBuffer): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static nvalueCount(paramarg0: number): number;
    static nvalueCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkLayerSettingEXT;
    pLayerName(): ByteBuffer;
    pLayerName(arg0: ByteBuffer): VkLayerSettingEXT;
    pLayerNameString(): string;
    pSettingName(): ByteBuffer;
    pSettingName(arg0: ByteBuffer): VkLayerSettingEXT;
    pSettingNameString(): string;
    pValues(arg0: ByteBuffer): VkLayerSettingEXT;
    pValues(arg0: number): ByteBuffer;
    set(arg0: ByteBuffer, arg1: ByteBuffer, arg2: number, arg3: number, arg4: ByteBuffer): VkLayerSettingEXT;
    set(arg0: VkLayerSettingEXT): VkLayerSettingEXT;
    sizeof(): number;
    type(): number;
    type(arg0: number): VkLayerSettingEXT;
    valueCount(): number;
    valueCount(arg0: number): VkLayerSettingEXT;
}
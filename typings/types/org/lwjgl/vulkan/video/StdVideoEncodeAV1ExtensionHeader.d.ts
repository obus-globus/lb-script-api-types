import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoEncodeAV1ExtensionHeader extends Struct<StdVideoEncodeAV1ExtensionHeader> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SPATIAL_ID: number;
    static TEMPORAL_ID: number;
    static calloc(): StdVideoEncodeAV1ExtensionHeader;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeAV1ExtensionHeader;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeAV1ExtensionHeader;
    static create(paramarg0: number): StdVideoEncodeAV1ExtensionHeader;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeAV1ExtensionHeader;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeAV1ExtensionHeader;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeAV1ExtensionHeader;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nspatial_id(paramarg0: number): number;
    static nspatial_id(paramarg0: number, paramarg1: number): void;
    static ntemporal_id(paramarg0: number): number;
    static ntemporal_id(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeAV1ExtensionHeader;
    set(arg0: number, arg1: number): StdVideoEncodeAV1ExtensionHeader;
    set(arg0: StdVideoEncodeAV1ExtensionHeader): StdVideoEncodeAV1ExtensionHeader;
    sizeof(): number;
    spatial_id(): number;
    spatial_id(arg0: number): StdVideoEncodeAV1ExtensionHeader;
    temporal_id(): number;
    temporal_id(arg0: number): StdVideoEncodeAV1ExtensionHeader;
}
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoVP9SegmentationFlags extends Struct<StdVideoVP9SegmentationFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITFIELD1: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoVP9SegmentationFlags;
    static calloc(paramarg0: MemoryStack): StdVideoVP9SegmentationFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoVP9SegmentationFlags;
    static create(paramarg0: number): StdVideoVP9SegmentationFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoVP9SegmentationFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoVP9SegmentationFlags;
    static malloc(paramarg0: MemoryStack): StdVideoVP9SegmentationFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbitfield1(paramarg0: number): number;
    static nbitfield1(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static nsegmentation_abs_or_delta_update(paramarg0: number): number;
    static nsegmentation_abs_or_delta_update(paramarg0: number, paramarg1: number): void;
    static nsegmentation_temporal_update(paramarg0: number): number;
    static nsegmentation_temporal_update(paramarg0: number, paramarg1: number): void;
    static nsegmentation_update_data(paramarg0: number): number;
    static nsegmentation_update_data(paramarg0: number, paramarg1: number): void;
    static nsegmentation_update_map(paramarg0: number): number;
    static nsegmentation_update_map(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoVP9SegmentationFlags;
    segmentation_abs_or_delta_update(): boolean;
    segmentation_abs_or_delta_update(arg0: boolean): StdVideoVP9SegmentationFlags;
    segmentation_temporal_update(): boolean;
    segmentation_temporal_update(arg0: boolean): StdVideoVP9SegmentationFlags;
    segmentation_update_data(): boolean;
    segmentation_update_data(arg0: boolean): StdVideoVP9SegmentationFlags;
    segmentation_update_map(): boolean;
    segmentation_update_map(arg0: boolean): StdVideoVP9SegmentationFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): StdVideoVP9SegmentationFlags;
    set(arg0: StdVideoVP9SegmentationFlags): StdVideoVP9SegmentationFlags;
    sizeof(): number;
}
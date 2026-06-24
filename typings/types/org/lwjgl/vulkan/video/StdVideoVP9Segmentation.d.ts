import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoVP9SegmentationFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoVP9SegmentationFlags.d.ts'
export class StdVideoVP9Segmentation extends Struct<StdVideoVP9Segmentation> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FEATUREDATA: number;
    static FEATUREENABLED: number;
    static FLAGS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEGMENTATION_PRED_PROB: number;
    static SEGMENTATION_TREE_PROBS: number;
    static SIZEOF: number;
    static calloc(): StdVideoVP9Segmentation;
    static calloc(paramarg0: MemoryStack): StdVideoVP9Segmentation;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoVP9Segmentation;
    static create(paramarg0: number): StdVideoVP9Segmentation;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoVP9Segmentation;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoVP9Segmentation;
    static malloc(paramarg0: MemoryStack): StdVideoVP9Segmentation;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nFeatureData(paramarg0: number): ShortBuffer;
    static nFeatureData(paramarg0: number, paramarg1: number): number;
    static nFeatureData(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nFeatureData(paramarg0: number, paramarg1: ShortBuffer): void;
    static nFeatureEnabled(paramarg0: number, paramarg1: number): number;
    static nFeatureEnabled(paramarg0: number): ByteBuffer;
    static nFeatureEnabled(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nFeatureEnabled(paramarg0: number, paramarg1: ByteBuffer): void;
    static nflags(paramarg0: number): StdVideoVP9SegmentationFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoVP9SegmentationFlags): void;
    static nsegmentation_pred_prob(paramarg0: number, paramarg1: number): number;
    static nsegmentation_pred_prob(paramarg0: number): ByteBuffer;
    static nsegmentation_pred_prob(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nsegmentation_pred_prob(paramarg0: number, paramarg1: ByteBuffer): void;
    static nsegmentation_tree_probs(paramarg0: number, paramarg1: number): number;
    static nsegmentation_tree_probs(paramarg0: number): ByteBuffer;
    static nsegmentation_tree_probs(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nsegmentation_tree_probs(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    FeatureData(): ShortBuffer;
    FeatureData(arg0: ShortBuffer): StdVideoVP9Segmentation;
    FeatureData(arg0: number): number;
    FeatureData(arg0: number, arg1: number): StdVideoVP9Segmentation;
    FeatureEnabled(): ByteBuffer;
    FeatureEnabled(arg0: ByteBuffer): StdVideoVP9Segmentation;
    FeatureEnabled(arg0: number): number;
    FeatureEnabled(arg0: number, arg1: number): StdVideoVP9Segmentation;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoVP9Segmentation;
    flags(): StdVideoVP9SegmentationFlags;
    flags(arg0: (param0: StdVideoVP9SegmentationFlags) => void): StdVideoVP9Segmentation;
    flags(arg0: StdVideoVP9SegmentationFlags): StdVideoVP9Segmentation;
    segmentation_pred_prob(): ByteBuffer;
    segmentation_pred_prob(arg0: ByteBuffer): StdVideoVP9Segmentation;
    segmentation_pred_prob(arg0: number): number;
    segmentation_pred_prob(arg0: number, arg1: number): StdVideoVP9Segmentation;
    segmentation_tree_probs(): ByteBuffer;
    segmentation_tree_probs(arg0: ByteBuffer): StdVideoVP9Segmentation;
    segmentation_tree_probs(arg0: number): number;
    segmentation_tree_probs(arg0: number, arg1: number): StdVideoVP9Segmentation;
    set(arg0: StdVideoVP9Segmentation): StdVideoVP9Segmentation;
    set(arg0: StdVideoVP9SegmentationFlags, arg1: ByteBuffer, arg2: ByteBuffer, arg3: ByteBuffer, arg4: ShortBuffer): StdVideoVP9Segmentation;
    sizeof(): number;
}
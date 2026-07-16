import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../../../java/nio/LongBuffer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { IOURingZCRXOffsets } from '../../../../../org/lwjgl/system/linux/liburing/IOURingZCRXOffsets.d.ts'
export class IOURingZCRXIfqReg extends Struct<IOURingZCRXIfqReg> implements NativeResource {
    static ALIGNOF: number;
    static AREA_PTR: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static IF_IDX: number;
    static IF_RXQ: number;
    static OFFSETS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REGION_PTR: number;
    static RQ_ENTRIES: number;
    static SIZEOF: number;
    static ZCRX_ID: number;
    static __RESV: number;
    static __RESV2: number;
    static calloc(): IOURingZCRXIfqReg;
    static calloc(paramarg0: MemoryStack): IOURingZCRXIfqReg;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): IOURingZCRXIfqReg;
    static create(paramarg0: number): IOURingZCRXIfqReg;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): IOURingZCRXIfqReg;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): IOURingZCRXIfqReg;
    static malloc(paramarg0: MemoryStack): IOURingZCRXIfqReg;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static n__resv(paramarg0: number): LongBuffer;
    static n__resv(paramarg0: number, paramarg1: number): number;
    static n__resv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static n__resv(paramarg0: number, paramarg1: LongBuffer): void;
    static n__resv2(paramarg0: number): number;
    static n__resv2(paramarg0: number, paramarg1: number): void;
    static narea_ptr(paramarg0: number): number;
    static narea_ptr(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nif_idx(paramarg0: number): number;
    static nif_idx(paramarg0: number, paramarg1: number): void;
    static nif_rxq(paramarg0: number): number;
    static nif_rxq(paramarg0: number, paramarg1: number): void;
    static noffsets(paramarg0: number): IOURingZCRXOffsets;
    static noffsets(paramarg0: number, paramarg1: IOURingZCRXOffsets): void;
    static nregion_ptr(paramarg0: number): number;
    static nregion_ptr(paramarg0: number, paramarg1: number): void;
    static nrq_entries(paramarg0: number): number;
    static nrq_entries(paramarg0: number, paramarg1: number): void;
    static nzcrx_id(paramarg0: number): number;
    static nzcrx_id(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    area_ptr(): number;
    area_ptr(arg0: number): IOURingZCRXIfqReg;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): IOURingZCRXIfqReg;
    flags(): number;
    flags(arg0: number): IOURingZCRXIfqReg;
    if_idx(): number;
    if_idx(arg0: number): IOURingZCRXIfqReg;
    if_rxq(): number;
    if_rxq(arg0: number): IOURingZCRXIfqReg;
    offsets(): IOURingZCRXOffsets;
    offsets(arg0: (param0: IOURingZCRXOffsets) => void): IOURingZCRXIfqReg;
    offsets(arg0: IOURingZCRXOffsets): IOURingZCRXIfqReg;
    region_ptr(): number;
    region_ptr(arg0: number): IOURingZCRXIfqReg;
    rq_entries(): number;
    rq_entries(arg0: number): IOURingZCRXIfqReg;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: IOURingZCRXOffsets, arg7: number): IOURingZCRXIfqReg;
    set(arg0: IOURingZCRXIfqReg): IOURingZCRXIfqReg;
    sizeof(): number;
    zcrx_id(): number;
    zcrx_id(arg0: number): IOURingZCRXIfqReg;
}
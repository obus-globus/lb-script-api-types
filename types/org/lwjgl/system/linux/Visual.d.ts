import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class Visual extends Struct<Visual> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BITS_PER_RGB: number;
    static BLUE_MASK: number;
    static CLASS: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXT_DATA: number;
    static GREEN_MASK: number;
    static MAP_ENTRIES: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RED_MASK: number;
    static SIZEOF: number;
    static VISUALID: number;
    static calloc(): Visual;
    static calloc(paramarg0: MemoryStack): Visual;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): Visual;
    static create(paramarg0: number): Visual;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): Visual;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): Visual;
    static malloc(paramarg0: MemoryStack): Visual;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbits_per_rgb(paramarg0: number): number;
    static nbits_per_rgb(paramarg0: number, paramarg1: number): void;
    static nblue_mask(paramarg0: number): number;
    static nblue_mask(paramarg0: number, paramarg1: number): void;
    static nclass$(paramarg0: number): number;
    static nclass$(paramarg0: number, paramarg1: number): void;
    static next_data(paramarg0: number): number;
    static next_data(paramarg0: number, paramarg1: number): void;
    static ngreen_mask(paramarg0: number): number;
    static ngreen_mask(paramarg0: number, paramarg1: number): void;
    static nmap_entries(paramarg0: number): number;
    static nmap_entries(paramarg0: number, paramarg1: number): void;
    static nred_mask(paramarg0: number): number;
    static nred_mask(paramarg0: number, paramarg1: number): void;
    static nvisualid(paramarg0: number): number;
    static nvisualid(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bits_per_rgb(): number;
    bits_per_rgb(arg0: number): Visual;
    blue_mask(): number;
    blue_mask(arg0: number): Visual;
    class$(): number;
    class$(arg0: number): Visual;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): Visual;
    ext_data(): number;
    ext_data(arg0: number): Visual;
    green_mask(): number;
    green_mask(arg0: number): Visual;
    map_entries(): number;
    map_entries(arg0: number): Visual;
    red_mask(): number;
    red_mask(arg0: number): Visual;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): Visual;
    set(arg0: Visual): Visual;
    sizeof(): number;
    visualid(): number;
    visualid(arg0: number): Visual;
}
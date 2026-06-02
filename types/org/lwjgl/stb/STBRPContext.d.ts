import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { STBRPNode } from '../../../org/lwjgl/stb/STBRPNode.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class STBRPContext extends Struct<STBRPContext> implements NativeResource {
    static ACTIVE_HEAD: number;
    static ALIGN: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXTRA: number;
    static FREE_HEAD: number;
    static HEIGHT: number;
    static HEURISTIC: number;
    static INIT_MODE: number;
    static NUM_NODES: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static WIDTH: number;
    static calloc(): STBRPContext;
    static calloc(paramarg0: MemoryStack): STBRPContext;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): STBRPContext;
    static create(paramarg0: number): STBRPContext;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): STBRPContext;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): STBRPContext;
    static malloc(paramarg0: MemoryStack): STBRPContext;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nactive_head(paramarg0: number): STBRPNode;
    static nalign(paramarg0: number): number;
    static nextra(paramarg0: number, paramarg1: number): STBRPNode;
    static nextra(paramarg0: number): (Object | null)[];
    static nfree_head(paramarg0: number): STBRPNode;
    static nheight(paramarg0: number): number;
    static nheuristic(paramarg0: number): number;
    static ninit_mode(paramarg0: number): number;
    static nnum_nodes(paramarg0: number): number;
    static nwidth(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    active_head(): STBRPNode;
    align(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): STBRPContext;
    extra(): (Object | null)[];
    extra(arg0: number): STBRPNode;
    free_head(): STBRPNode;
    height(): number;
    heuristic(): number;
    init_mode(): number;
    num_nodes(): number;
    sizeof(): number;
    width(): number;
}
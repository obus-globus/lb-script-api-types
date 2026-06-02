import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../../java/nio/LongBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
import type { SharedLibrary } from '../../../../org/lwjgl/system/SharedLibrary.d.ts'
import type { MallocMessageCallbackI } from '../../../../org/lwjgl/system/jemalloc/MallocMessageCallbackI.d.ts'
export class JEmalloc extends Object {
    static JEMALLOC_VERSION: string;
    static JEMALLOC_VERSION_BUGFIX: number;
    static JEMALLOC_VERSION_GID: string;
    static JEMALLOC_VERSION_MAJOR: number;
    static JEMALLOC_VERSION_MINOR: number;
    static JEMALLOC_VERSION_NREV: number;
    static MALLCTL_ARENAS_ALL: number;
    static MALLCTL_ARENAS_DESTROYED: number;
    static MALLOCX_TCACHE_NONE: number;
    static MALLOCX_ZERO: number;
    static MALLOCX_ALIGN(paramarg0: number): number;
    static MALLOCX_ARENA(paramarg0: number): number;
    static MALLOCX_LG_ALIGN(paramarg0: number): number;
    static MALLOCX_TCACHE(paramarg0: number): number;
    static getLibrary(): SharedLibrary;
    static je_aligned_alloc(paramarg0: number, paramarg1: number): ByteBuffer;
    static je_calloc(paramarg0: number, paramarg1: number): ByteBuffer;
    static je_dallocx(paramarg0: ByteBuffer, paramarg1: number): void;
    static je_dallocx(paramarg0: DoubleBuffer, paramarg1: number): void;
    static je_dallocx(paramarg0: FloatBuffer, paramarg1: number): void;
    static je_dallocx(paramarg0: IntBuffer, paramarg1: number): void;
    static je_dallocx(paramarg0: LongBuffer, paramarg1: number): void;
    static je_dallocx(paramarg0: ShortBuffer, paramarg1: number): void;
    static je_dallocx(paramarg0: PointerBuffer, paramarg1: number): void;
    static je_free(paramarg0: ByteBuffer): void;
    static je_free(paramarg0: DoubleBuffer): void;
    static je_free(paramarg0: FloatBuffer): void;
    static je_free(paramarg0: IntBuffer): void;
    static je_free(paramarg0: LongBuffer): void;
    static je_free(paramarg0: ShortBuffer): void;
    static je_free(paramarg0: PointerBuffer): void;
    static je_free_aligned_sized(paramarg0: ByteBuffer, paramarg1: number): void;
    static je_free_aligned_sized(paramarg0: DoubleBuffer, paramarg1: number): void;
    static je_free_aligned_sized(paramarg0: FloatBuffer, paramarg1: number): void;
    static je_free_aligned_sized(paramarg0: IntBuffer, paramarg1: number): void;
    static je_free_aligned_sized(paramarg0: LongBuffer, paramarg1: number): void;
    static je_free_aligned_sized(paramarg0: ShortBuffer, paramarg1: number): void;
    static je_free_aligned_sized(paramarg0: PointerBuffer, paramarg1: number): void;
    static je_free_sized(paramarg0: ByteBuffer): void;
    static je_free_sized(paramarg0: DoubleBuffer): void;
    static je_free_sized(paramarg0: FloatBuffer): void;
    static je_free_sized(paramarg0: IntBuffer): void;
    static je_free_sized(paramarg0: LongBuffer): void;
    static je_free_sized(paramarg0: ShortBuffer): void;
    static je_free_sized(paramarg0: PointerBuffer): void;
    static je_mallctl(paramarg0: CharSequence, paramarg1: ByteBuffer, paramarg2: PointerBuffer, paramarg3: ByteBuffer): number;
    static je_mallctl(paramarg0: ByteBuffer, paramarg1: ByteBuffer, paramarg2: PointerBuffer, paramarg3: ByteBuffer): number;
    static je_mallctlbymib(paramarg0: PointerBuffer, paramarg1: ByteBuffer, paramarg2: PointerBuffer, paramarg3: ByteBuffer): number;
    static je_mallctlnametomib(paramarg0: CharSequence, paramarg1: PointerBuffer, paramarg2: PointerBuffer): number;
    static je_mallctlnametomib(paramarg0: ByteBuffer, paramarg1: PointerBuffer, paramarg2: PointerBuffer): number;
    static je_malloc(paramarg0: number): ByteBuffer;
    static je_malloc_message(): PointerBuffer;
    static je_malloc_stats_print(paramarg0: (param0: number, param1: number) => void, paramarg1: number, paramarg2: CharSequence): void;
    static je_malloc_stats_print(paramarg0: (param0: number, param1: number) => void, paramarg1: number, paramarg2: ByteBuffer): void;
    static je_malloc_usable_size(paramarg0: ByteBuffer): number;
    static je_mallocx(paramarg0: number, paramarg1: number): ByteBuffer;
    static je_nallocx(paramarg0: number, paramarg1: number): ByteBuffer;
    static je_posix_memalign(paramarg0: PointerBuffer, paramarg1: number, paramarg2: number): number;
    static je_rallocx(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): ByteBuffer;
    static je_realloc(paramarg0: ByteBuffer, paramarg1: number): ByteBuffer;
    static je_sallocx(paramarg0: ByteBuffer, paramarg1: number): number;
    static je_sdallocx(paramarg0: ByteBuffer, paramarg1: number): void;
    static je_sdallocx(paramarg0: DoubleBuffer, paramarg1: number): void;
    static je_sdallocx(paramarg0: FloatBuffer, paramarg1: number): void;
    static je_sdallocx(paramarg0: IntBuffer, paramarg1: number): void;
    static je_sdallocx(paramarg0: LongBuffer, paramarg1: number): void;
    static je_sdallocx(paramarg0: ShortBuffer, paramarg1: number): void;
    static je_sdallocx(paramarg0: PointerBuffer, paramarg1: number): void;
    static je_xallocx(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nje_aligned_alloc(paramarg0: number, paramarg1: number): number;
    static nje_calloc(paramarg0: number, paramarg1: number): number;
    static nje_dallocx(paramarg0: number, paramarg1: number): void;
    static nje_free(paramarg0: number): void;
    static nje_free_aligned_sized(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nje_free_sized(paramarg0: number, paramarg1: number): void;
    static nje_mallctl(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nje_mallctlbymib(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nje_mallctlnametomib(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nje_malloc(paramarg0: number): number;
    static nje_malloc_stats_print(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nje_malloc_usable_size(paramarg0: number): number;
    static nje_mallocx(paramarg0: number, paramarg1: number): number;
    static nje_nallocx(paramarg0: number, paramarg1: number): number;
    static nje_posix_memalign(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nje_rallocx(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nje_realloc(paramarg0: number, paramarg1: number): number;
    static nje_sallocx(paramarg0: number, paramarg1: number): number;
    static nje_sdallocx(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nje_xallocx(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}
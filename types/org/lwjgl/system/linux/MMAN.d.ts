import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MMAN extends Object {
    static MAP_32BIT: number;
    static MAP_ANON: number;
    static MAP_ANONYMOUS: number;
    static MAP_DENYWRITE: number;
    static MAP_EXECUTABLE: number;
    static MAP_FAILED: number;
    static MAP_FILE: number;
    static MAP_FIXED: number;
    static MAP_FIXED_NOREPLACE: number;
    static MAP_GROWSDOWN: number;
    static MAP_HUGETLB: number;
    static MAP_HUGE_1GB: number;
    static MAP_HUGE_2MB: number;
    static MAP_HUGE_MASK: number;
    static MAP_HUGE_SHIFT: number;
    static MAP_LOCKED: number;
    static MAP_NONBLOCK: number;
    static MAP_NORESERVE: number;
    static MAP_POPULATE: number;
    static MAP_PRIVATE: number;
    static MAP_SHARED: number;
    static MAP_SHARED_VALIDATE: number;
    static MAP_STACK: number;
    static MAP_SYNC: number;
    static MAP_UNINITIALIZED: number;
    static PROT_EXEC: number;
    static PROT_GROWSDOWN: number;
    static PROT_GROWSUP: number;
    static PROT_NONE: number;
    static PROT_READ: number;
    static PROT_WRITE: number;
    static mmap(paramarg0: IntBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static munmap(paramarg0: IntBuffer, paramarg1: ByteBuffer): number;
    static nmmap(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static nmunmap(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}
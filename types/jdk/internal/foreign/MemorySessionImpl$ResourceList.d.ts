import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { MemorySessionImpl$ResourceList$ResourceCleanup } from '../../../jdk/internal/foreign/MemorySessionImpl$ResourceList$ResourceCleanup.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class MemorySessionImpl$ResourceList extends Object implements Runnable {
    constructor()
    // private fst: MemorySessionImpl$ResourceList$ResourceCleanup;
    add(arg0: MemorySessionImpl$ResourceList$ResourceCleanup): void;
    cleanup(): void;
    run(): void;
}
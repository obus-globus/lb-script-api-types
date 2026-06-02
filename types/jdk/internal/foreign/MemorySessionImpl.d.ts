import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Arena } from '../../../java/lang/foreign/Arena.d.ts'
import type { MemorySegment } from '../../../java/lang/foreign/MemorySegment.d.ts'
import type { MemorySegment$Scope } from '../../../java/lang/foreign/MemorySegment$Scope.d.ts'
import type { Cleaner } from '../../../java/lang/ref/Cleaner.d.ts'
import type { ArenaImpl } from '../../../jdk/internal/foreign/ArenaImpl.d.ts'
import type { MemorySessionImpl$ResourceList } from '../../../jdk/internal/foreign/MemorySessionImpl$ResourceList.d.ts'
import type { MemorySessionImpl$ResourceList$ResourceCleanup } from '../../../jdk/internal/foreign/MemorySessionImpl$ResourceList$ResourceCleanup.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MemorySessionImpl extends Object implements MemorySegment$Scope {
    static GLOBAL_SESSION: MemorySessionImpl;
    static checkValidState(paramarg0: MemorySegment): void;
    static createConfined(paramarg0: Thread): MemorySessionImpl;
    static createHeap(paramarg0: Object): MemorySessionImpl;
    static createImplicit(paramarg0: Cleaner): MemorySessionImpl;
    static createShared(): MemorySessionImpl;
    static toMemorySession(paramarg0: Arena): MemorySessionImpl;
    constructor(arg0: Thread, arg1: MemorySessionImpl$ResourceList)
    // private acquireCount: number;
    // private owner: Thread;
    // private resourceList: MemorySessionImpl$ResourceList;
    // private state: number;
    acquire0(): void;
    addCloseAction(arg0: () => void): void;
    addInternal(arg0: MemorySessionImpl$ResourceList$ResourceCleanup): void;
    addOrCleanupIfFail(arg0: MemorySessionImpl$ResourceList$ResourceCleanup): void;
    asArena(): ArenaImpl;
    checkValidState(): void;
    checkValidStateRaw(): void;
    clone(): Object;
    close(): void;
    isAccessibleBy(arg0: Thread): boolean;
    isAlive(): boolean;
    isCloseable(): boolean;
    isCloseableBy(arg0: Thread): boolean;
    justClose(): void;
    ownerThread(): Thread;
    release0(): void;
    whileAlive(arg0: () => void): void;
}
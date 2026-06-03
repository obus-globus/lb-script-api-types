import type { Arena } from '../../../java/lang/foreign/Arena.d.ts'
import type { MemoryLayout } from '../../../java/lang/foreign/MemoryLayout.d.ts'
import type { MemorySegment } from '../../../java/lang/foreign/MemorySegment.d.ts'
import type { MemorySegment$Scope } from '../../../java/lang/foreign/MemorySegment$Scope.d.ts'
import type { MemorySessionImpl } from '../../../jdk/internal/foreign/MemorySessionImpl.d.ts'
import type { NativeMemorySegmentImpl } from '../../../jdk/internal/foreign/NativeMemorySegmentImpl.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ArenaImpl extends Object implements Arena {
    static global(): Arena;
    static ofAuto(): Arena;
    static ofConfined(): Arena;
    static ofShared(): Arena;
    constructor(arg0: MemorySessionImpl)
    // private session: MemorySessionImpl;
    // private shouldReserveMemory: boolean;
    allocate(arg0: MemoryLayout): MemorySegment;
    allocate(arg0: MemoryLayout, arg1: number): MemorySegment;
    allocate(arg0: number): MemorySegment;
    allocate(arg0: number, arg1: number): NativeMemorySegmentImpl;
    allocateNoInit(arg0: number, arg1: number): NativeMemorySegmentImpl;
    close(): void;
    scope(): MemorySegment$Scope;
}
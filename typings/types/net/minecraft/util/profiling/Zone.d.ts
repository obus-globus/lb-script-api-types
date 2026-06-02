import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export class Zone extends Object implements AutoCloseable {
    static INACTIVE: Zone;
    constructor(profiler: ProfilerFiller)
    // private profiler: ProfilerFiller;
    addText(text: () => string): Zone;
    addText(text: string): Zone;
    addValue(value: number): Zone;
    close(): void;
    setColor(color: number): Zone;
}
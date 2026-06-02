import type { MemoryUsage } from '../../../java/lang/management/MemoryUsage.d.ts'
import type { PlatformManagedObject } from '../../../java/lang/management/PlatformManagedObject.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MemoryMXBean extends PlatformManagedObject, Object{
    gc(): void;
    getHeapMemoryUsage(): MemoryUsage;
    getNonHeapMemoryUsage(): MemoryUsage;
    getObjectPendingFinalizationCount(): number;
    isVerbose(): boolean;
    setVerbose(arg0: boolean): void;
}
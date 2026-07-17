import type { MemoryType } from '../../../java/lang/management/MemoryType.d.ts'
import type { MemoryUsage } from '../../../java/lang/management/MemoryUsage.d.ts'
import type { PlatformManagedObject } from '../../../java/lang/management/PlatformManagedObject.d.ts'
import type { ObjectName } from '../../../javax/management/ObjectName.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MemoryPoolMXBean extends PlatformManagedObject, Object{
    getCollectionUsage(): MemoryUsage;
    getCollectionUsageThreshold(): number;
    getCollectionUsageThresholdCount(): number;
    getMemoryManagerNames(): string[];
    getName(): string;
    getObjectName(): ObjectName;
    getPeakUsage(): MemoryUsage;
    getType(): MemoryType;
    getUsage(): MemoryUsage;
    getUsageThreshold(): number;
    getUsageThresholdCount(): number;
    isCollectionUsageThresholdExceeded(): boolean;
    isCollectionUsageThresholdSupported(): boolean;
    isUsageThresholdExceeded(): boolean;
    isUsageThresholdSupported(): boolean;
    isValid(): boolean;
    resetPeakUsage(): void;
    setCollectionUsageThreshold(arg0: number): void;
    setUsageThreshold(arg0: number): void;
}
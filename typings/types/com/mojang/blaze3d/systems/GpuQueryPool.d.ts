import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { OptionalLong } from '../../../../java/util/OptionalLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GpuQueryPool extends AutoCloseable, Object{
    close(): void;
    getValue(index: number): OptionalLong;
    getValues(index: number, count: number): OptionalLong[];
    size(): number;
}
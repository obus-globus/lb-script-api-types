import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { OptionalLong } from '../../../../java/util/OptionalLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GpuQuery extends AutoCloseable, Object{
    close(): void;
    getValue(): OptionalLong;
}
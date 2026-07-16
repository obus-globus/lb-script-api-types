import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryInformation$PageSwapProperty } from '../../../../oshi/driver/windows/perfmon/MemoryInformation$PageSwapProperty.d.ts'
export class MemoryInformation extends Object {
    static queryPageSwaps(): Map<MemoryInformation$PageSwapProperty, number>;
    private constructor()
}
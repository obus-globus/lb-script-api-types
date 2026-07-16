import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class MemoryTier extends Enum<MemoryTier> {
    static High: MemoryTier;
    static Low: MemoryTier;
    static Mid: MemoryTier;
    static SuperHigh: MemoryTier;
    static SuperLow: MemoryTier;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MemoryTier;
    static values(): MemoryTier[];
    private constructor()
    name(): "SuperLow" | "Low" | "Mid" | "High" | "SuperHigh";
}
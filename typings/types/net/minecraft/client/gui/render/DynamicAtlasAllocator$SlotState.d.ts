import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DynamicAtlasAllocator$SlotState extends Enum<DynamicAtlasAllocator$SlotState> {
    static EMPTY: DynamicAtlasAllocator$SlotState;
    static READY: DynamicAtlasAllocator$SlotState;
    static STALE: DynamicAtlasAllocator$SlotState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DynamicAtlasAllocator$SlotState;
    static values(): DynamicAtlasAllocator$SlotState[];
    private constructor()
    name(): "EMPTY" | "STALE" | "READY";
}
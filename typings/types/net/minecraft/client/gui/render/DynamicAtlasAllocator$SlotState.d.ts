import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DynamicAtlasAllocator$SlotState extends Enum<DynamicAtlasAllocator$SlotState> {
    static EMPTY: DynamicAtlasAllocator$SlotState;
    static READY: DynamicAtlasAllocator$SlotState;
    static STALE: DynamicAtlasAllocator$SlotState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DynamicAtlasAllocator$SlotState;
    static values(): (Object | null)[];
    private constructor()
    name(): "EMPTY" | "STALE" | "READY";
}
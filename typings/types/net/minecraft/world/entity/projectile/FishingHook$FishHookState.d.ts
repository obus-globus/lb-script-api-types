import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FishingHook$FishHookState extends Enum<FishingHook$FishHookState> {
    static BOBBING: FishingHook$FishHookState;
    static FLYING: FishingHook$FishHookState;
    static HOOKED_IN_ENTITY: FishingHook$FishHookState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FishingHook$FishHookState;
    static values(): (Object | null)[];
    private constructor()
    name(): "FLYING" | "HOOKED_IN_ENTITY" | "BOBBING";
}
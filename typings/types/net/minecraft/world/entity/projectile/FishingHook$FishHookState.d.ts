import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FishingHook$FishHookState extends Enum<FishingHook$FishHookState> {
    static BOBBING: FishingHook$FishHookState;
    static FLYING: FishingHook$FishHookState;
    static HOOKED_IN_ENTITY: FishingHook$FishHookState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FishingHook$FishHookState;
    static values(): FishingHook$FishHookState[];
    private constructor()
    name(): "FLYING" | "HOOKED_IN_ENTITY" | "BOBBING";
}
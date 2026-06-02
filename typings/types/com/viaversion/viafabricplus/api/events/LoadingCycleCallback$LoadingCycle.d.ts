import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LoadingCycleCallback$LoadingCycle extends Enum<LoadingCycleCallback$LoadingCycle> {
    static FINAL_LOAD: LoadingCycleCallback$LoadingCycle;
    static POST_FILES_LOAD: LoadingCycleCallback$LoadingCycle;
    static POST_GAME_LOAD: LoadingCycleCallback$LoadingCycle;
    static POST_SETTINGS_LOAD: LoadingCycleCallback$LoadingCycle;
    static POST_VIAVERSION_LOAD: LoadingCycleCallback$LoadingCycle;
    static PRE_FILES_LOAD: LoadingCycleCallback$LoadingCycle;
    static PRE_SETTINGS_LOAD: LoadingCycleCallback$LoadingCycle;
    static PRE_VIAVERSION_LOAD: LoadingCycleCallback$LoadingCycle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LoadingCycleCallback$LoadingCycle;
    static values(): (Object | null)[];
    private constructor()
    name(): "PRE_SETTINGS_LOAD" | "POST_SETTINGS_LOAD" | "PRE_FILES_LOAD" | "POST_FILES_LOAD" | "PRE_VIAVERSION_LOAD" | "POST_VIAVERSION_LOAD" | "FINAL_LOAD" | "POST_GAME_LOAD";
}
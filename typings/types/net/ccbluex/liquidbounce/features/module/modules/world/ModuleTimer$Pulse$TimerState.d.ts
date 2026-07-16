import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ModuleTimer$Pulse$TimerState extends Enum<ModuleTimer$Pulse$TimerState> {
    static BOOST_SPEED: ModuleTimer$Pulse$TimerState;
    static NORMAL_SPEED: ModuleTimer$Pulse$TimerState;
    static getEntries(): ModuleTimer$Pulse$TimerState[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleTimer$Pulse$TimerState;
    static values(): ModuleTimer$Pulse$TimerState[];
    private constructor()
    name(): "NORMAL_SPEED" | "BOOST_SPEED";
}
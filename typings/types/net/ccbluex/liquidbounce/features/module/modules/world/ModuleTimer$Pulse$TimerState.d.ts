import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ModuleTimer$Pulse$TimerState extends Enum<ModuleTimer$Pulse$TimerState> {
    static BOOST_SPEED: ModuleTimer$Pulse$TimerState;
    static NORMAL_SPEED: ModuleTimer$Pulse$TimerState;
    static getEntries(): ModuleTimer$Pulse$TimerState[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleTimer$Pulse$TimerState;
    static values(): ModuleTimer$Pulse$TimerState[];
    private constructor()
    name(): "NORMAL_SPEED" | "BOOST_SPEED";
}
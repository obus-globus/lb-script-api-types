import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RealmsMainScreen$LayoutState extends Enum<RealmsMainScreen$LayoutState> {
    static LIST: RealmsMainScreen$LayoutState;
    static LOADING: RealmsMainScreen$LayoutState;
    static NO_REALMS: RealmsMainScreen$LayoutState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RealmsMainScreen$LayoutState;
    static values(): RealmsMainScreen$LayoutState[];
    private constructor()
    name(): "LOADING" | "NO_REALMS" | "LIST";
}
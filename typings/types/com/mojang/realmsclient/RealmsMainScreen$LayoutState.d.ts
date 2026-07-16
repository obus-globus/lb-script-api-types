import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RealmsMainScreen$LayoutState extends Enum<RealmsMainScreen$LayoutState> {
    static LIST: RealmsMainScreen$LayoutState;
    static LOADING: RealmsMainScreen$LayoutState;
    static NO_REALMS: RealmsMainScreen$LayoutState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RealmsMainScreen$LayoutState;
    static values(): RealmsMainScreen$LayoutState[];
    private constructor()
    name(): "LOADING" | "NO_REALMS" | "LIST";
}
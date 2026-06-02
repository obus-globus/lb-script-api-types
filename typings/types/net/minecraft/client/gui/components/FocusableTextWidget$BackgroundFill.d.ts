import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FocusableTextWidget$BackgroundFill extends Enum<FocusableTextWidget$BackgroundFill> {
    static ALWAYS: FocusableTextWidget$BackgroundFill;
    static NEVER: FocusableTextWidget$BackgroundFill;
    static ON_FOCUS: FocusableTextWidget$BackgroundFill;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FocusableTextWidget$BackgroundFill;
    static values(): (Object | null)[];
    private constructor()
    name(): "ALWAYS" | "ON_FOCUS" | "NEVER";
}
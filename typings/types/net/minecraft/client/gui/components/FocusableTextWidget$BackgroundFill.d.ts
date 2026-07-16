import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FocusableTextWidget$BackgroundFill extends Enum<FocusableTextWidget$BackgroundFill> {
    static ALWAYS: FocusableTextWidget$BackgroundFill;
    static NEVER: FocusableTextWidget$BackgroundFill;
    static ON_FOCUS: FocusableTextWidget$BackgroundFill;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FocusableTextWidget$BackgroundFill;
    static values(): FocusableTextWidget$BackgroundFill[];
    private constructor()
    name(): "ALWAYS" | "ON_FOCUS" | "NEVER";
}
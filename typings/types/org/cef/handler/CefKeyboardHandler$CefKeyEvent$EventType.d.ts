import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefKeyboardHandler$CefKeyEvent$EventType extends Enum<CefKeyboardHandler$CefKeyEvent$EventType> {
    static KEYEVENT_CHAR: CefKeyboardHandler$CefKeyEvent$EventType;
    static KEYEVENT_KEYDOWN: CefKeyboardHandler$CefKeyEvent$EventType;
    static KEYEVENT_KEYUP: CefKeyboardHandler$CefKeyEvent$EventType;
    static KEYEVENT_RAWKEYDOWN: CefKeyboardHandler$CefKeyEvent$EventType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CefKeyboardHandler$CefKeyEvent$EventType;
    static values(): CefKeyboardHandler$CefKeyEvent$EventType[];
    private constructor()
    name(): "KEYEVENT_RAWKEYDOWN" | "KEYEVENT_KEYDOWN" | "KEYEVENT_KEYUP" | "KEYEVENT_CHAR";
}
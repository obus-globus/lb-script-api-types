import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Taskbar$Feature extends Enum<Taskbar$Feature> {
    static ICON_BADGE_IMAGE_WINDOW: Taskbar$Feature;
    static ICON_BADGE_NUMBER: Taskbar$Feature;
    static ICON_BADGE_TEXT: Taskbar$Feature;
    static ICON_IMAGE: Taskbar$Feature;
    static MENU: Taskbar$Feature;
    static PROGRESS_STATE_WINDOW: Taskbar$Feature;
    static PROGRESS_VALUE: Taskbar$Feature;
    static PROGRESS_VALUE_WINDOW: Taskbar$Feature;
    static USER_ATTENTION: Taskbar$Feature;
    static USER_ATTENTION_WINDOW: Taskbar$Feature;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Taskbar$Feature;
    static values(): (Object | null)[];
    private constructor()
    name(): "ICON_BADGE_TEXT" | "ICON_BADGE_NUMBER" | "ICON_BADGE_IMAGE_WINDOW" | "ICON_IMAGE" | "MENU" | "PROGRESS_STATE_WINDOW" | "PROGRESS_VALUE" | "PROGRESS_VALUE_WINDOW" | "USER_ATTENTION" | "USER_ATTENTION_WINDOW";
}
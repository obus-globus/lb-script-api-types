import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Desktop$Action extends Enum<Desktop$Action> {
    static APP_ABOUT: Desktop$Action;
    static APP_EVENT_FOREGROUND: Desktop$Action;
    static APP_EVENT_HIDDEN: Desktop$Action;
    static APP_EVENT_REOPENED: Desktop$Action;
    static APP_EVENT_SCREEN_SLEEP: Desktop$Action;
    static APP_EVENT_SYSTEM_SLEEP: Desktop$Action;
    static APP_EVENT_USER_SESSION: Desktop$Action;
    static APP_HELP_VIEWER: Desktop$Action;
    static APP_MENU_BAR: Desktop$Action;
    static APP_OPEN_FILE: Desktop$Action;
    static APP_OPEN_URI: Desktop$Action;
    static APP_PREFERENCES: Desktop$Action;
    static APP_PRINT_FILE: Desktop$Action;
    static APP_QUIT_HANDLER: Desktop$Action;
    static APP_QUIT_STRATEGY: Desktop$Action;
    static APP_REQUEST_FOREGROUND: Desktop$Action;
    static APP_SUDDEN_TERMINATION: Desktop$Action;
    static BROWSE: Desktop$Action;
    static BROWSE_FILE_DIR: Desktop$Action;
    static EDIT: Desktop$Action;
    static MAIL: Desktop$Action;
    static MOVE_TO_TRASH: Desktop$Action;
    static OPEN: Desktop$Action;
    static PRINT: Desktop$Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Desktop$Action;
    static values(): (Object | null)[];
    private constructor()
    name(): "OPEN" | "EDIT" | "PRINT" | "MAIL" | "BROWSE" | "APP_EVENT_FOREGROUND" | "APP_EVENT_HIDDEN" | "APP_EVENT_REOPENED" | "APP_EVENT_SCREEN_SLEEP" | "APP_EVENT_SYSTEM_SLEEP" | "APP_EVENT_USER_SESSION" | "APP_ABOUT" | "APP_PREFERENCES" | "APP_OPEN_FILE" | "APP_PRINT_FILE" | "APP_OPEN_URI" | "APP_QUIT_HANDLER" | "APP_QUIT_STRATEGY" | "APP_SUDDEN_TERMINATION" | "APP_REQUEST_FOREGROUND" | "APP_HELP_VIEWER" | "APP_MENU_BAR" | "BROWSE_FILE_DIR" | "MOVE_TO_TRASH";
}
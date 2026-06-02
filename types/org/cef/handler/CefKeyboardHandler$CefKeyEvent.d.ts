import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefKeyboardHandler$CefKeyEvent$EventType } from '../../../org/cef/handler/CefKeyboardHandler$CefKeyEvent$EventType.d.ts'
export class CefKeyboardHandler$CefKeyEvent extends Object {
    constructor(arg0: CefKeyboardHandler$CefKeyEvent$EventType, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: string, arg6: string, arg7: boolean)
    character: string;
    focus_on_editable_field: boolean;
    is_system_key: boolean;
    modifiers: number;
    native_key_code: number;
    type: CefKeyboardHandler$CefKeyEvent$EventType;
    unmodified_character: string;
    windows_key_code: number;
    toString(): string;
}
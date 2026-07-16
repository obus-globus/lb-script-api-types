import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { Wincon$KEY_EVENT_RECORD } from '../../../../../com/sun/jna/platform/win32/Wincon$KEY_EVENT_RECORD.d.ts'
import type { Wincon$MOUSE_EVENT_RECORD } from '../../../../../com/sun/jna/platform/win32/Wincon$MOUSE_EVENT_RECORD.d.ts'
import type { Wincon$WINDOW_BUFFER_SIZE_RECORD } from '../../../../../com/sun/jna/platform/win32/Wincon$WINDOW_BUFFER_SIZE_RECORD.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class Wincon$INPUT_RECORD$Event extends Union {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    KeyEvent: Wincon$KEY_EVENT_RECORD;
    MouseEvent: Wincon$MOUSE_EVENT_RECORD;
    WindowBufferSizeEvent: Wincon$WINDOW_BUFFER_SIZE_RECORD;
}
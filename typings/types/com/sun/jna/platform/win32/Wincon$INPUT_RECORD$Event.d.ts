import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { Wincon$KEY_EVENT_RECORD } from '../../../../../com/sun/jna/platform/win32/Wincon$KEY_EVENT_RECORD.d.ts'
import type { Wincon$MOUSE_EVENT_RECORD } from '../../../../../com/sun/jna/platform/win32/Wincon$MOUSE_EVENT_RECORD.d.ts'
import type { Wincon$WINDOW_BUFFER_SIZE_RECORD } from '../../../../../com/sun/jna/platform/win32/Wincon$WINDOW_BUFFER_SIZE_RECORD.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Wincon$INPUT_RECORD$Event extends Union {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    KeyEvent: Wincon$KEY_EVENT_RECORD;
    MouseEvent: Wincon$MOUSE_EVENT_RECORD;
    WindowBufferSizeEvent: Wincon$WINDOW_BUFFER_SIZE_RECORD;
}
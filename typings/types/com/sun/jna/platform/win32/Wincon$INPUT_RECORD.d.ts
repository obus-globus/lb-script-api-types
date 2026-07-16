import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Wincon$INPUT_RECORD$Event } from '../../../../../com/sun/jna/platform/win32/Wincon$INPUT_RECORD$Event.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class Wincon$INPUT_RECORD extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static KEY_EVENT: number;
    static MOUSE_EVENT: number;
    static WINDOW_BUFFER_SIZE_EVENT: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    Event: Wincon$INPUT_RECORD$Event;
    EventType: number;
    read(): void;
    toString(): string;
    toString(arg0: boolean): string;
}
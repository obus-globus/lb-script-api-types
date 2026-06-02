import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
export class TinyFileDialogs extends Object {
    static tinyfd_allowCursesDialogs: string;
    static tinyfd_forceConsole: string;
    static tinyfd_needs: string;
    static tinyfd_response: string;
    static tinyfd_silent: string;
    static tinyfd_verbose: string;
    static tinyfd_version: string;
    static tinyfd_winUtf8: string;
    static ntinyfd_colorChooser(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static ntinyfd_getGlobalChar(paramarg0: number): number;
    static ntinyfd_getGlobalInt(paramarg0: number): number;
    static ntinyfd_inputBox(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static ntinyfd_messageBox(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static ntinyfd_notifyPopup(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static ntinyfd_openFileDialog(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static ntinyfd_saveFileDialog(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static ntinyfd_selectFolderDialog(paramarg0: number, paramarg1: number): number;
    static ntinyfd_setGlobalInt(paramarg0: number, paramarg1: number): number;
    static tinyfd_beep(): void;
    static tinyfd_colorChooser(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: ByteBuffer, paramarg3: ByteBuffer): string;
    static tinyfd_colorChooser(paramarg0: ByteBuffer, paramarg1: ByteBuffer, paramarg2: ByteBuffer, paramarg3: ByteBuffer): string;
    static tinyfd_getGlobalChar(paramarg0: CharSequence): string;
    static tinyfd_getGlobalChar(paramarg0: ByteBuffer): string;
    static tinyfd_getGlobalInt(paramarg0: CharSequence): number;
    static tinyfd_getGlobalInt(paramarg0: ByteBuffer): number;
    static tinyfd_inputBox(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: CharSequence): string;
    static tinyfd_inputBox(paramarg0: ByteBuffer, paramarg1: ByteBuffer, paramarg2: ByteBuffer): string;
    static tinyfd_messageBox(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: CharSequence, paramarg3: CharSequence, paramarg4: number): number;
    static tinyfd_messageBox(paramarg0: ByteBuffer, paramarg1: ByteBuffer, paramarg2: ByteBuffer, paramarg3: ByteBuffer, paramarg4: number): number;
    static tinyfd_notifyPopup(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: CharSequence): number;
    static tinyfd_notifyPopup(paramarg0: ByteBuffer, paramarg1: ByteBuffer, paramarg2: ByteBuffer): number;
    static tinyfd_openFileDialog(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: PointerBuffer, paramarg3: CharSequence, paramarg4: boolean): string;
    static tinyfd_openFileDialog(paramarg0: ByteBuffer, paramarg1: ByteBuffer, paramarg2: PointerBuffer, paramarg3: ByteBuffer, paramarg4: boolean): string;
    static tinyfd_saveFileDialog(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: PointerBuffer, paramarg3: CharSequence): string;
    static tinyfd_saveFileDialog(paramarg0: ByteBuffer, paramarg1: ByteBuffer, paramarg2: PointerBuffer, paramarg3: ByteBuffer): string;
    static tinyfd_selectFolderDialog(paramarg0: CharSequence, paramarg1: CharSequence): string;
    static tinyfd_selectFolderDialog(paramarg0: ByteBuffer, paramarg1: ByteBuffer): string;
    static tinyfd_setGlobalInt(paramarg0: CharSequence, paramarg1: number): number;
    static tinyfd_setGlobalInt(paramarg0: ByteBuffer, paramarg1: number): number;
    constructor()
}
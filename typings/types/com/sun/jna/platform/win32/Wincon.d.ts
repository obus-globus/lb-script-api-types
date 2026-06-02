import type { WinDef$HWND } from '../../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { WinDef$LPVOID } from '../../../../../com/sun/jna/platform/win32/WinDef$LPVOID.d.ts'
import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { Wincon$CONSOLE_SCREEN_BUFFER_INFO } from '../../../../../com/sun/jna/platform/win32/Wincon$CONSOLE_SCREEN_BUFFER_INFO.d.ts'
import type { Wincon$INPUT_RECORD } from '../../../../../com/sun/jna/platform/win32/Wincon$INPUT_RECORD.d.ts'
import type { IntByReference } from '../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Wincon extends Object{
    AllocConsole(): boolean;
    AttachConsole(arg0: number): boolean;
    FlushConsoleInputBuffer(arg0: WinNT$HANDLE): boolean;
    FreeConsole(): boolean;
    GenerateConsoleCtrlEvent(arg0: number, arg1: number): boolean;
    GetConsoleCP(): number;
    GetConsoleDisplayMode(arg0: IntByReference): boolean;
    GetConsoleMode(arg0: WinNT$HANDLE, arg1: IntByReference): boolean;
    GetConsoleOriginalTitle(arg0: string[], arg1: number): number;
    GetConsoleOutputCP(): number;
    GetConsoleScreenBufferInfo(arg0: WinNT$HANDLE, arg1: Wincon$CONSOLE_SCREEN_BUFFER_INFO): boolean;
    GetConsoleTitle(arg0: string[], arg1: number): number;
    GetConsoleWindow(): WinDef$HWND;
    GetNumberOfConsoleInputEvents(arg0: WinNT$HANDLE, arg1: IntByReference): boolean;
    GetNumberOfConsoleMouseButtons(arg0: IntByReference): boolean;
    GetStdHandle(arg0: number): WinNT$HANDLE;
    ReadConsoleInput(arg0: WinNT$HANDLE, arg1: Wincon$INPUT_RECORD[], arg2: number, arg3: IntByReference): boolean;
    SetConsoleCP(arg0: number): boolean;
    SetConsoleMode(arg0: WinNT$HANDLE, arg1: number): boolean;
    SetConsoleOutputCP(arg0: number): boolean;
    SetConsoleTitle(arg0: string): boolean;
    SetStdHandle(arg0: number, arg1: WinNT$HANDLE): boolean;
    WriteConsole(arg0: WinNT$HANDLE, arg1: string, arg2: number, arg3: IntByReference, arg4: WinDef$LPVOID): boolean;
}
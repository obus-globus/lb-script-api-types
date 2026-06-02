import type { Win32VK } from '../../../../../com/sun/jna/platform/win32/Win32VK.d.ts'
import type { WinDef$HINSTANCE } from '../../../../../com/sun/jna/platform/win32/WinDef$HINSTANCE.d.ts'
import type { WinDef$HMENU } from '../../../../../com/sun/jna/platform/win32/WinDef$HMENU.d.ts'
import type { WinDef$HWND } from '../../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { WinDef$LPVOID } from '../../../../../com/sun/jna/platform/win32/WinDef$LPVOID.d.ts'
import type { WinUser$RAWINPUTDEVICELIST } from '../../../../../com/sun/jna/platform/win32/WinUser$RAWINPUTDEVICELIST.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class User32Util extends Object {
    static WIN32VK_MAPPABLE: Win32VK[];
    static GetRawInputDeviceList(): WinUser$RAWINPUTDEVICELIST[];
    static createWindow(paramarg0: string, paramarg1: string, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: WinDef$HWND, paramarg8: WinDef$HMENU, paramarg9: WinDef$HINSTANCE, paramarg10: WinDef$LPVOID): WinDef$HWND;
    static createWindowEx(paramarg0: number, paramarg1: string, paramarg2: string, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: WinDef$HWND, paramarg9: WinDef$HMENU, paramarg10: WinDef$HINSTANCE, paramarg11: WinDef$LPVOID): WinDef$HWND;
    static destroyWindow(paramarg0: WinDef$HWND): void;
    static loadString(paramarg0: string): string;
    static registerWindowMessage(paramarg0: string): number;
    constructor()
}
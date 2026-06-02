import type { WinDef$LRESULT } from '../../../../../com/sun/jna/platform/win32/WinDef$LRESULT.d.ts'
import type { WinDef$WPARAM } from '../../../../../com/sun/jna/platform/win32/WinDef$WPARAM.d.ts'
import type { WinUser$HOOKPROC } from '../../../../../com/sun/jna/platform/win32/WinUser$HOOKPROC.d.ts'
import type { WinUser$KBDLLHOOKSTRUCT } from '../../../../../com/sun/jna/platform/win32/WinUser$KBDLLHOOKSTRUCT.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WinUser$LowLevelKeyboardProc extends WinUser$HOOKPROC, Object{
    callback(arg0: number, arg1: WinDef$WPARAM, arg2: WinUser$KBDLLHOOKSTRUCT): WinDef$LRESULT;
}
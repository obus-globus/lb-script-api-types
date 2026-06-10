import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32Process$CommandLineProperty } from '../../../../oshi/driver/windows/wmi/Win32Process$CommandLineProperty.d.ts'
import type { Win32Process$ProcessXPProperty } from '../../../../oshi/driver/windows/wmi/Win32Process$ProcessXPProperty.d.ts'
export class Win32Process extends Object {
    static queryCommandLines(paramarg0: number[]): WbemcliUtil$WmiResult<Win32Process$CommandLineProperty>;
    static queryProcesses(paramarg0: number[]): WbemcliUtil$WmiResult<Win32Process$ProcessXPProperty>;
    private constructor()
}
import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32Fan$SpeedProperty } from '../../../../oshi/driver/windows/wmi/Win32Fan$SpeedProperty.d.ts'
export class Win32Fan extends Object {
    static querySpeed(): WbemcliUtil$WmiResult<Win32Fan$SpeedProperty>;
    private constructor()
}
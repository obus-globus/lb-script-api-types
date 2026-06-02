import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32VideoController$VideoControllerProperty } from '../../../../oshi/driver/windows/wmi/Win32VideoController$VideoControllerProperty.d.ts'
export class Win32VideoController extends Object {
    static queryVideoController(): WbemcliUtil$WmiResult<Win32VideoController$VideoControllerProperty>;
    private constructor()
}
import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32BaseBoard$BaseBoardProperty } from '../../../../oshi/driver/windows/wmi/Win32BaseBoard$BaseBoardProperty.d.ts'
export class Win32BaseBoard extends Object {
    static queryBaseboardInfo(): WbemcliUtil$WmiResult<Win32BaseBoard$BaseBoardProperty>;
    private constructor()
}
import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32Bios$BiosProperty } from '../../../../oshi/driver/windows/wmi/Win32Bios$BiosProperty.d.ts'
import type { Win32Bios$BiosSerialProperty } from '../../../../oshi/driver/windows/wmi/Win32Bios$BiosSerialProperty.d.ts'
export class Win32Bios extends Object {
    static queryBiosInfo(): WbemcliUtil$WmiResult<Win32Bios$BiosProperty>;
    static querySerialNumber(): WbemcliUtil$WmiResult<Win32Bios$BiosSerialProperty>;
    private constructor()
}
import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Win32ComputerSystemProduct$ComputerSystemProductProperty } from '../../../../oshi/driver/windows/wmi/Win32ComputerSystemProduct$ComputerSystemProductProperty.d.ts'
export class Win32ComputerSystemProduct extends Object {
    static queryIdentifyingNumberUUID(): WbemcliUtil$WmiResult<Win32ComputerSystemProduct$ComputerSystemProductProperty>;
    private constructor()
}
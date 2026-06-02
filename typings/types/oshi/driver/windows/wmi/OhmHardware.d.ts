import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OhmHardware$IdentifierProperty } from '../../../../oshi/driver/windows/wmi/OhmHardware$IdentifierProperty.d.ts'
import type { WmiQueryHandler } from '../../../../oshi/util/platform/windows/WmiQueryHandler.d.ts'
export class OhmHardware extends Object {
    static queryHwIdentifier(paramarg0: WmiQueryHandler, paramarg1: string, paramarg2: string): WbemcliUtil$WmiResult<OhmHardware$IdentifierProperty>;
    private constructor()
}
import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OhmSensor$ValueProperty } from '../../../../oshi/driver/windows/wmi/OhmSensor$ValueProperty.d.ts'
import type { WmiQueryHandler } from '../../../../oshi/util/platform/windows/WmiQueryHandler.d.ts'
export class OhmSensor extends Object {
    static querySensorValue(paramarg0: WmiQueryHandler, paramarg1: string, paramarg2: string): WbemcliUtil$WmiResult<OhmSensor$ValueProperty>;
    private constructor()
}
import type { WbemcliUtil$WmiResult } from '../../../../com/sun/jna/platform/win32/COM/WbemcliUtil$WmiResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MSAcpiThermalZoneTemperature$TemperatureProperty } from '../../../../oshi/driver/windows/wmi/MSAcpiThermalZoneTemperature$TemperatureProperty.d.ts'
export class MSAcpiThermalZoneTemperature extends Object {
    static WMI_NAMESPACE: string;
    static queryCurrentTemperature(): WbemcliUtil$WmiResult<MSAcpiThermalZoneTemperature$TemperatureProperty>;
    private constructor()
}
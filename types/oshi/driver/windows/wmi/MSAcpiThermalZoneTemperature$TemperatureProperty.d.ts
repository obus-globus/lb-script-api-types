import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MSAcpiThermalZoneTemperature$TemperatureProperty extends Enum<MSAcpiThermalZoneTemperature$TemperatureProperty> {
    static CURRENTTEMPERATURE: MSAcpiThermalZoneTemperature$TemperatureProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MSAcpiThermalZoneTemperature$TemperatureProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "CURRENTTEMPERATURE";
}
import type { File } from '../../../../java/io/File.d.ts'
import type { FileFilter } from '../../../../java/io/FileFilter.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { AbstractSensors } from '../../../../oshi/hardware/common/AbstractSensors.d.ts'
export class LinuxSensors extends AbstractSensors {
    static OSHI_HWMON_NAME_PRIORITY: string;
    static OSHI_THERMAL_ZONE_TYPE_PRIORITY: string;
    constructor()
    // private sensorsMap: { [key: string]: string };
    // private getSensorFilesFromPath(arg0: string, arg1: string, arg2: (param0: File) => kotlin.Boolean): void;
    // private getSensorFilesFromPath(arg0: string, arg1: string, arg2: (param0: File) => kotlin.Boolean, arg3: (param0: File[]) => kotlin.Int): void;
    // private populateSensorsMapFromHwmon(): void;
    // private populateSensorsMapFromThermalZone(): void;
    queryCpuTemperature(): number;
    queryCpuVoltage(): number;
    queryFanSpeeds(): number[];
}
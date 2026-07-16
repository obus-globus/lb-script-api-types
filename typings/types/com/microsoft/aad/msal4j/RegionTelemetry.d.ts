import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RegionTelemetry extends Enum<RegionTelemetry> {
    static REGION_OUTCOME_AUTODETECT_FAILED: RegionTelemetry;
    static REGION_OUTCOME_AUTODETECT_SUCCESS: RegionTelemetry;
    static REGION_OUTCOME_DEVELOPER_AUTODETECT_FAILED: RegionTelemetry;
    static REGION_OUTCOME_DEVELOPER_AUTODETECT_MATCH: RegionTelemetry;
    static REGION_OUTCOME_DEVELOPER_AUTODETECT_MISMATCH: RegionTelemetry;
    static REGION_SOURCE_CACHE: RegionTelemetry;
    static REGION_SOURCE_ENV_VARIABLE: RegionTelemetry;
    static REGION_SOURCE_FAILED_AUTODETECT: RegionTelemetry;
    static REGION_SOURCE_IMDS: RegionTelemetry;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RegionTelemetry;
    static values(): RegionTelemetry[];
    private constructor(arg2: number)
    // private telemetryValue: number;
    name(): "REGION_SOURCE_FAILED_AUTODETECT" | "REGION_SOURCE_CACHE" | "REGION_SOURCE_ENV_VARIABLE" | "REGION_SOURCE_IMDS" | "REGION_OUTCOME_DEVELOPER_AUTODETECT_MATCH" | "REGION_OUTCOME_DEVELOPER_AUTODETECT_FAILED" | "REGION_OUTCOME_DEVELOPER_AUTODETECT_MISMATCH" | "REGION_OUTCOME_AUTODETECT_SUCCESS" | "REGION_OUTCOME_AUTODETECT_FAILED";
}
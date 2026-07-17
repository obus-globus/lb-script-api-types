import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { VersionInfo } from '../../../../com/viaversion/viaversion/dump/VersionInfo.d.ts'
import type { JsonObject } from '../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DumpTemplate extends Record {
    constructor(versionInfo: VersionInfo, configuration: JavaMap<string, Object>, platformDump: JsonObject, injectionDump: JsonObject, playerSample: JsonObject)
    // private configuration: JavaMap<string, Object>;
    // private injectionDump: JsonObject;
    // private platformDump: JsonObject;
    // private playerSample: JsonObject;
    // private versionInfo: VersionInfo;
    configuration(): JavaMap<string, Object>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    injectionDump(): JsonObject;
    platformDump(): JsonObject;
    playerSample(): JsonObject;
    toString(): string;
    versionInfo(): VersionInfo;
}
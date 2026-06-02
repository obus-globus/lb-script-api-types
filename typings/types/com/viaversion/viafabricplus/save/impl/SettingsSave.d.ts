import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { AbstractSave } from '../../../../../com/viaversion/viafabricplus/save/AbstractSave.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
export class SettingsSave extends AbstractSave {
    static GSON: Gson;
    static protocolVersionByName(paramarg0: string): ProtocolVersion;
    constructor()
    // private selectedProtocolVersion: string;
    postInit(): void;
    read(arg0: JsonObject): void;
    write(arg0: JsonObject): void;
    writeSettings(arg0: JsonObject): void;
}
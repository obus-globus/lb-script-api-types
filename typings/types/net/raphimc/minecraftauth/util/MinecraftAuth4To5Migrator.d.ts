import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { MsaApplicationConfig } from '../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
export class MinecraftAuth4To5Migrator extends Object {
    static findRefreshToken(paramarg0: Map$Entry<string, GsonElement>[]): string;
    static migrateBedrockSave(paramarg0: JsonObject): JsonObject;
    static migrateBedrockSave(paramarg0: JsonObject, paramarg1: MsaApplicationConfig): JsonObject;
    static migrateJavaSave(paramarg0: JsonObject): JsonObject;
    static migrateJavaSave(paramarg0: JsonObject, paramarg1: MsaApplicationConfig): JsonObject;
    constructor()
}
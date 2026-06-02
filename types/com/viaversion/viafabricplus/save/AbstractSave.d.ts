import type { Gson } from '../../../../com/google/gson/Gson.d.ts'
import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractSave extends Object {
    static GSON: Gson;
    constructor(arg0: string)
    readonly path: Path[];
    getPath(): Path[];
    init(): void;
    postInit(): void;
    read(arg0: JsonObject): void;
    save(): void;
    write(arg0: JsonObject): void;
}
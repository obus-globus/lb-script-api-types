import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectMapper extends Object {
    static create(): ObjectMapper;
    constructor(arg0: Gson)
    // private gson: Gson;
    readValue<T extends Object | number | string | boolean>(arg0: string, arg1: Class<T>): T;
    writeValueAsString(arg0: Object): string;
}
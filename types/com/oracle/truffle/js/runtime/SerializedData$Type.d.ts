import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SerializedData$Type extends Enum<SerializedData$Type> {
    static Array: SerializedData$Type;
    static ArrayBuffer: SerializedData$Type;
    static ArrayBufferView: SerializedData$Type;
    static BigInt: SerializedData$Type;
    static Boolean: SerializedData$Type;
    static DataView: SerializedData$Type;
    static Date: SerializedData$Type;
    static Duplicate: SerializedData$Type;
    static Error: SerializedData$Type;
    static Map: SerializedData$Type;
    static Number: SerializedData$Type;
    static Object: SerializedData$Type;
    static Primitive: SerializedData$Type;
    static RegExp: SerializedData$Type;
    static Set: SerializedData$Type;
    static SharedArrayBuffer: SerializedData$Type;
    static String: SerializedData$Type;
    static WebAssemblyMemory: SerializedData$Type;
    static WebAssemblyModule: SerializedData$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SerializedData$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "Primitive" | "Duplicate" | "Boolean" | "Number" | "BigInt" | "String" | "Date" | "RegExp" | "SharedArrayBuffer" | "ArrayBuffer" | "ArrayBufferView" | "DataView" | "Map" | "Set" | "Error" | "Array" | "Object" | "WebAssemblyMemory" | "WebAssemblyModule";
}
import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Packet$OpCode } from '../../../../com/jagrosh/discordipc/entities/Packet$OpCode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Packet extends Object {
    constructor(arg0: Packet$OpCode, arg1: JsonObject)
    constructor(arg0: Packet$OpCode, arg1: JsonObject, arg2: string)
    // private data: JsonObject;
    // private encoding: string;
    readonly op: Packet$OpCode;
    getJson(): JsonObject;
    getOp(): Packet$OpCode;
    toBytes(): number[];
    toDecodedString(): string;
    toString(): string;
}
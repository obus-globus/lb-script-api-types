import type { TypeObject } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/TypeObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class TypeProfileEntry extends Object {
    constructor(offset: number, types: TypeObject[])
    readonly offset: number;
    readonly types: TypeObject[];
    getOffset(): number;
    getTypes(): TypeObject[];
    // private toJSON(): JSONObject;
}
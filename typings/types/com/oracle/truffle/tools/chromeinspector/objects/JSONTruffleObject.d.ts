import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { TriState } from '../../../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { AbstractInspectorObject } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/AbstractInspectorObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class JSONTruffleObject extends AbstractInspectorObject {
    constructor(json: JSONObject)
    // private json: JSONObject;
    // private keys: TruffleObject;
    // private names: string[];
    getFieldValueOrNull(name: string): Object;
    getMembers(includeInternal: boolean): TruffleObject;
    // private getNames(): string[];
    identityHashCode(): number;
    invokeMember(name: string, arguments: Object[]): Object;
    isField(name: string): boolean;
    isIdenticalOrUndefined(other: Object): TriState;
    isMethod(name: string): boolean;
}
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class VariablePresentationHint extends JSONBase {
    static create(): VariablePresentationHint;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAttributes(): string[];
    getKind(): string;
    getVisibility(): string;
    hashCode(): number;
    setAttributes(attributes: string[]): VariablePresentationHint;
    setKind(kind: string): VariablePresentationHint;
    setVisibility(visibility: string): VariablePresentationHint;
}
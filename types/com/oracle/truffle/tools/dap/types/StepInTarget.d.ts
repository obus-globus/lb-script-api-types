import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class StepInTarget extends JSONBase {
    static create(paramid: number, paramlabel: string): StepInTarget;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getId(): number;
    getLabel(): string;
    hashCode(): number;
    setId(id: number): StepInTarget;
    setLabel(label: string): StepInTarget;
}
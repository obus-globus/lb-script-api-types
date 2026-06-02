import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class ColumnDescriptor extends JSONBase {
    static create(paramattributeName: string, paramlabel: string): ColumnDescriptor;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAttributeName(): string;
    getFormat(): string;
    getLabel(): string;
    getType(): string;
    getWidth(): number;
    hashCode(): number;
    setAttributeName(attributeName: string): ColumnDescriptor;
    setFormat(format: string): ColumnDescriptor;
    setLabel(label: string): ColumnDescriptor;
    setType(type: string): ColumnDescriptor;
    setWidth(width: number): ColumnDescriptor;
}
import type { WebAssemblyValueType } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/wasm/WebAssemblyValueType.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class WasmFunctionTypeInfo extends Record {
    constructor(paramTypes: WebAssemblyValueType[], resultTypes: WebAssemblyValueType[], anyTypeIsI64: boolean, anyTypeIsV128: boolean)
    // private anyTypeIsI64: boolean;
    // private anyTypeIsV128: boolean;
    // private paramTypes: WebAssemblyValueType[];
    // private resultTypes: WebAssemblyValueType[];
    anyTypeIsI64(): boolean;
    anyTypeIsV128(): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    paramLength(): number;
    paramTypes(): WebAssemblyValueType[];
    resultLength(): number;
    resultTypes(): WebAssemblyValueType[];
    toString(): string;
}
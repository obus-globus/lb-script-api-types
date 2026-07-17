import type { WebAssemblyType } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/wasm/WebAssemblyType.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class WasmFunctionTypeInfo extends Record {
    constructor(paramTypes: WebAssemblyType[], resultTypes: WebAssemblyType[], anyTypeIsI64: boolean, anyTypeIsV128: boolean)
    // private anyTypeIsI64: boolean;
    // private anyTypeIsV128: boolean;
    // private paramTypes: WebAssemblyType[];
    // private resultTypes: WebAssemblyType[];
    anyTypeIsI64(): boolean;
    anyTypeIsV128(): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    paramLength(): number;
    paramTypes(): WebAssemblyType[];
    resultLength(): number;
    resultTypes(): WebAssemblyType[];
    toString(): string;
}
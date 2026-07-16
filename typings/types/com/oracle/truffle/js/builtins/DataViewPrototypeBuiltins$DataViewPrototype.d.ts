import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DataViewPrototypeBuiltins$DataViewPrototype extends Enum<DataViewPrototypeBuiltins$DataViewPrototype> implements BuiltinEnum<DataViewPrototypeBuiltins$DataViewPrototype> {
    static buffer: DataViewPrototypeBuiltins$DataViewPrototype;
    static byteLength: DataViewPrototypeBuiltins$DataViewPrototype;
    static byteOffset: DataViewPrototypeBuiltins$DataViewPrototype;
    static getBigInt64: DataViewPrototypeBuiltins$DataViewPrototype;
    static getBigUint64: DataViewPrototypeBuiltins$DataViewPrototype;
    static getFloat16: DataViewPrototypeBuiltins$DataViewPrototype;
    static getFloat32: DataViewPrototypeBuiltins$DataViewPrototype;
    static getFloat64: DataViewPrototypeBuiltins$DataViewPrototype;
    static getInt16: DataViewPrototypeBuiltins$DataViewPrototype;
    static getInt32: DataViewPrototypeBuiltins$DataViewPrototype;
    static getInt8: DataViewPrototypeBuiltins$DataViewPrototype;
    static getUint16: DataViewPrototypeBuiltins$DataViewPrototype;
    static getUint32: DataViewPrototypeBuiltins$DataViewPrototype;
    static getUint8: DataViewPrototypeBuiltins$DataViewPrototype;
    static setBigInt64: DataViewPrototypeBuiltins$DataViewPrototype;
    static setBigUint64: DataViewPrototypeBuiltins$DataViewPrototype;
    static setFloat16: DataViewPrototypeBuiltins$DataViewPrototype;
    static setFloat32: DataViewPrototypeBuiltins$DataViewPrototype;
    static setFloat64: DataViewPrototypeBuiltins$DataViewPrototype;
    static setInt16: DataViewPrototypeBuiltins$DataViewPrototype;
    static setInt32: DataViewPrototypeBuiltins$DataViewPrototype;
    static setInt8: DataViewPrototypeBuiltins$DataViewPrototype;
    static setUint16: DataViewPrototypeBuiltins$DataViewPrototype;
    static setUint32: DataViewPrototypeBuiltins$DataViewPrototype;
    static setUint8: DataViewPrototypeBuiltins$DataViewPrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DataViewPrototypeBuiltins$DataViewPrototype;
    static values(): DataViewPrototypeBuiltins$DataViewPrototype[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): DataViewPrototypeBuiltins$DataViewPrototype;
    createNode(context: JSContext, builtin: JSBuiltin, construct: boolean, newTarget: boolean): Object;
    getECMAScriptVersion(): number;
    getKey(): Object;
    getLength(): number;
    getName(): TruffleString;
    isAOTSupported(): boolean;
    isAnnexB(): boolean;
    isConfigurable(): boolean;
    isConstructor(): boolean;
    isEnabled(): boolean;
    isEnumerable(): boolean;
    isGetter(): boolean;
    isNewTargetConstructor(): boolean;
    isOptional(): boolean;
    isSetter(): boolean;
    isWritable(): boolean;
    prependAccessorPrefix(name: TruffleString): TruffleString;
    name(): "getBigInt64" | "getBigUint64" | "getFloat16" | "getFloat32" | "getFloat64" | "getInt8" | "getInt16" | "getInt32" | "getUint8" | "getUint16" | "getUint32" | "setBigInt64" | "setBigUint64" | "setFloat16" | "setFloat32" | "setFloat64" | "setInt8" | "setInt16" | "setInt32" | "setUint8" | "setUint16" | "setUint32" | "buffer" | "byteLength" | "byteOffset";
}
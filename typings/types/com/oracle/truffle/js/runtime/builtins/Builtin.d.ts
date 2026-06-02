import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Builtin extends Object{
    createFunctionData(context: JSContext): JSFunctionData;
    getAttributeFlags(): number;
    getECMAScriptVersion(): number;
    getKey(): Object;
    getLength(): number;
    getName(): TruffleString;
    isAnnexB(): boolean;
    isConfigurable(): boolean;
    isEnumerable(): boolean;
    isGetter(): boolean;
    isIncluded(context: JSContext): boolean;
    isOptional(): boolean;
    isSetter(): boolean;
    isWritable(): boolean;
}
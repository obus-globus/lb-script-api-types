import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinNodeFactory } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinNodeFactory.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Builtin } from '../../../../../../com/oracle/truffle/js/runtime/builtins/Builtin.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionData$CallTargetInitializer } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData$CallTargetInitializer.d.ts'
import type { JSFunctionData$Target } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData$Target.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSBuiltin extends Object implements Builtin, JSFunctionData$CallTargetInitializer {
    static createSourceSection(): SourceSection;
    static getSourceSection(): SourceSection;
    constructor(containerName: TruffleString, functionName: TruffleString, key: Object, length: number, attributeFlags: number, ecmaScriptVersion: number, annexB: boolean, functionNodeFactory: (param0: JSContext, param1: JSBuiltin) => kotlin.Any, constructorNodeFactory: (param0: JSContext, param1: JSBuiltin) => kotlin.Any, newTargetConstructorFactory: (param0: JSContext, param1: JSBuiltin) => kotlin.Any, isOptional: boolean)
    constructor(containerName: TruffleString, name: TruffleString, length: number, flags: number, functionNodeFactory: (param0: JSContext, param1: JSBuiltin) => kotlin.Any)
    readonly annexB: boolean;
    readonly attributeFlags: number;
    // private constructorNodeFactory: (param0: JSContext, param1: JSBuiltin) => kotlin.Any;
    // private ecmaScriptVersion: number;
    readonly fullName: TruffleString;
    // private functionNodeFactory: (param0: JSContext, param1: JSBuiltin) => kotlin.Any;
    readonly key: Object;
    readonly length: number;
    readonly name: TruffleString;
    // private newTargetConstructorNodeFactory: (param0: JSContext, param1: JSBuiltin) => kotlin.Any;
    readonly optional: boolean;
    createFunctionData(context: JSContext): JSFunctionData;
    createNode(context: JSContext, construct: boolean, newTarget: boolean): JSBuiltinNode;
    // private createNodeImpl(context: JSContext, construct: boolean, newTarget: boolean): JSBuiltinNode;
    getAttributeFlags(): number;
    getECMAScriptVersion(): number;
    getFullName(): TruffleString;
    getKey(): Object;
    getLength(): number;
    getName(): TruffleString;
    hasNewTargetConstructor(): boolean;
    hasSeparateConstructor(): boolean;
    initializeCallTarget(functionData: JSFunctionData, target: JSFunctionData$Target, callTarget: CallTarget): void;
    initializeCallTargets(functionData: JSFunctionData): void;
    initializeRoot(functionData: JSFunctionData): void;
    isAnnexB(): boolean;
    isConfigurable(): boolean;
    isConstructor(): boolean;
    isEnumerable(): boolean;
    isGetter(): boolean;
    isIncluded(context: JSContext): boolean;
    isOptional(): boolean;
    isSetter(): boolean;
    isWritable(): boolean;
    toString(): string;
}
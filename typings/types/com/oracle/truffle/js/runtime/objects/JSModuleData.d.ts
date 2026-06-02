import type { Module } from '../../../../../../com/oracle/js/parser/ir/Module.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
export class JSModuleData extends ScriptOrModule {
    constructor(module: Module, source: Source, functionData: JSFunctionData, frameDescriptor: FrameDescriptor)
    constructor(module: Module, context: JSContext, source: Source)
    readonly frameDescriptor: FrameDescriptor;
    readonly functionData: JSFunctionData;
    readonly module: Module;
    getFrameDescriptor(): FrameDescriptor;
    getFunctionData(): JSFunctionData;
    getModule(): Module;
    isTopLevelAsync(): boolean;
    setFunctionData(functionData: JSFunctionData): void;
}
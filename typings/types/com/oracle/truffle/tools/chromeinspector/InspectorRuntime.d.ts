import type { DebugException } from '../../../../../com/oracle/truffle/api/debug/DebugException.d.ts'
import type { DebugScope } from '../../../../../com/oracle/truffle/api/debug/DebugScope.d.ts'
import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { InspectorExecutionContext } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { InspectorExecutionContext$Listener } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext$Listener.d.ts'
import type { InspectorRuntime$ConsoleOutputListener } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorRuntime$ConsoleOutputListener.d.ts'
import type { ScriptsHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/ScriptsHandler.d.ts'
import type { Params } from '../../../../../com/oracle/truffle/tools/chromeinspector/commands/Params.d.ts'
import type { RuntimeDomain } from '../../../../../com/oracle/truffle/tools/chromeinspector/domains/RuntimeDomain.d.ts'
import type { Enabler } from '../../../../../com/oracle/truffle/tools/chromeinspector/instrument/Enabler.d.ts'
import type { InspectServerSession$CommandPostProcessor } from '../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession$CommandPostProcessor.d.ts'
import type { CallArgument } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/CallArgument.d.ts'
import type { RemoteObject$IndexRange } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/RemoteObject$IndexRange.d.ts'
import type { RemoteObject$TypeMark } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/RemoteObject$TypeMark.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../org/graalvm/collections/Pair.d.ts'
import type { JSONObject } from '../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class InspectorRuntime extends RuntimeDomain {
    constructor(context: InspectorExecutionContext)
    // private context: InspectorExecutionContext;
    // private contextListener: InspectorExecutionContext$Listener;
    // private enabler: Enabler;
    // private outputListeners: InspectorRuntime$ConsoleOutputListener[];
    // private slh: ScriptsHandler;
    callFunctionOn(objectId: string, functionDeclaration: string, arguments: Object[], silent: boolean, returnByValue: boolean, generatePreview: boolean, awaitPromise: boolean, executionContextId: number, objectGroup: string): Params;
    compileScript(expression: string, sourceURL: string, persistScript: boolean, executionContextId: number): Params;
    // private createMapEntryElement(name: string, v: DebugValue, generatePreview: boolean, objectGroup: string): JSONObject;
    // private createPropertyJSON(v: DebugValue, generatePreview: boolean, objectGroup: string): JSONObject;
    // private createPropertyJSON(v: DebugValue, defaultName: string, generatePreview: boolean, readEagerly: boolean, enumerable: boolean, objectGroup: string, forceInternal: boolean, typeMark: RemoteObject$TypeMark): JSONObject;
    // private createPropertyJSON(v: DebugValue, defaultName: string, generatePreview: boolean, objectGroup: string): JSONObject;
    // private createPropertyJSON(v: DebugValue, defaultName: string, generatePreview: boolean, objectGroup: string, typeMark: RemoteObject$TypeMark): JSONObject;
    // private createSource(expression: string, sourceURL: string): Source;
    doDisable(): void;
    doEnable(): void;
    evaluate(expression: string, objectGroup: string, includeCommandLineAPI: boolean, silent: boolean, contextId: number, returnByValue: boolean, generatePreview: boolean, awaitPromise: boolean): Params;
    // private fillExceptionDetails(obj: JSONObject, ex: DebugException): void;
    // private fillExceptionDetails(obj: JSONObject, errorMessage: string): void;
    getProperties(objectId: string, ownProperties: boolean, accessorPropertiesOnly: boolean, generatePreview: boolean): Params;
    notifyClosing(): void;
    notifyConsoleAPICalled(type: string, text: Object): void;
    // private putMapEntries(json: JSONObject, value: DebugValue, indexRange: RemoteObject$IndexRange, generatePreview: boolean, objectGroup: string): void;
    // private putMapEntry(json: JSONObject, entry: DebugValue, generatePreview: boolean, objectGroup: string): void;
    // private putResultProperties(json: JSONObject, value: DebugValue, properties: DebugValue[], arrayElements: DebugValue[], generatePreview: boolean, objectGroup: string): void;
    releaseObject(objectId: string): void;
    releaseObjectGroup(objectGroup: string): void;
    runIfWaitingForDebugger(postProcessor: InspectServerSession$CommandPostProcessor): void;
    setCustomObjectFormatterEnabled(enabled: boolean): void;
    // private setPropertyValue(object: DebugValue, scope: DebugScope, property: Object, typeMark: RemoteObject$TypeMark, newValue: CallArgument, evaluatedValue: Pair<DebugValue, Object>): void;
}
import type { Params } from '../../../../../../com/oracle/truffle/tools/chromeinspector/commands/Params.d.ts'
import type { Domain } from '../../../../../../com/oracle/truffle/tools/chromeinspector/domains/Domain.d.ts'
import type { InspectServerSession$CommandPostProcessor } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession$CommandPostProcessor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class RuntimeDomain extends Domain {
    constructor()
    callFunctionOn(objectId: string, functionDeclaration: string, arguments: Object[], silent: boolean, returnByValue: boolean, generatePreview: boolean, awaitPromise: boolean, executionContextId: number, objectGroup: string): Params;
    compileScript(expression: string, sourceURL: string, persistScript: boolean, executionContextId: number): Params;
    evaluate(expression: string, objectGroup: string, includeCommandLineAPI: boolean, silent: boolean, contextId: number, returnByValue: boolean, generatePreview: boolean, awaitPromise: boolean): Params;
    executionContextCreated(id: number, name: string): void;
    executionContextDestroyed(id: number): void;
    getProperties(objectId: string, ownProperties: boolean, accessorPropertiesOnly: boolean, generatePreview: boolean): Params;
    notifyConsoleAPICalled(type: string, text: Object): void;
    releaseObject(objectId: string): void;
    releaseObjectGroup(objectGroup: string): void;
    runIfWaitingForDebugger(postProcessor: InspectServerSession$CommandPostProcessor): void;
    setCustomObjectFormatterEnabled(enabled: boolean): void;
}
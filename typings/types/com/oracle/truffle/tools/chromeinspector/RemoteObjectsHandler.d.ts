import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { InspectorExecutionContext } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { RemoteObject } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/RemoteObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RemoteObjectsHandler extends Object {
    constructor(context: InspectorExecutionContext)
    // private context: InspectorExecutionContext;
    // private customPreviewBodies: { [key: string]: DebugValue };
    // private customPreviewConfigs: { [key: string]: DebugValue };
    // private objectGroups: { [key: string]: string[] };
    // private remotesByIDs: { [key: string]: RemoteObject };
    // private remotesByValue: Map<DebugValue, RemoteObject>;
    getCustomPreviewBody(id: string): DebugValue;
    getCustomPreviewConfig(id: string): DebugValue;
    getObjectGroupOf(objectId: string): string;
    getRegisteredIDs(): string[];
    getRemote(value: DebugValue): RemoteObject;
    getRemote(objectId: string): RemoteObject;
    register(remote: RemoteObject): void;
    register(remote: RemoteObject, objectGroup: string): void;
    registerCustomPreviewBody(id: string, body: DebugValue): void;
    registerCustomPreviewConfig(objectId: string, config: DebugValue): void;
    releaseObject(objectId: string): void;
    releaseObjectGroup(objectGroup: string): void;
    reset(): void;
}
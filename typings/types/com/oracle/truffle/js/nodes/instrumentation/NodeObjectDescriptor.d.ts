import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NodeObjectDescriptor extends Object implements TruffleObject {
    constructor()
    // private data: JavaMap<string, Object>;
    addProperty(name: string, value: Object): void;
    getMembers(includeInternal: boolean): Object;
    hasMembers(): boolean;
    isMemberReadable(key: string): boolean;
    readMember(key: string): Object;
}
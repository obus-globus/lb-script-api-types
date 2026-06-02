import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
import type { MemoryDump$MetaObjectCopy } from '../../../../../../org/graalvm/tools/insight/heap/instrument/MemoryDump$MetaObjectCopy.d.ts'
export class MemoryDump$ObjectCopy extends Object implements TruffleObject {
    constructor()
    // private finished: boolean;
    // private members: EconomicMap<string, Object>;
    // private metaObject: MemoryDump$MetaObjectCopy;
    addMember(name: string, value: Object): void;
    getMembers(includeInternal: boolean): Object;
    getMetaObject(): Object;
    hasMembers(): boolean;
    hasMetaObject(): boolean;
    isFinished(): boolean;
    isMemberReadable(member: string): boolean;
    readMember(name: string): Object;
    setFinished(): void;
    setMetaObject(metaObject: MemoryDump$MetaObjectCopy): void;
}
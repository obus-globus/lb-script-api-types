import type { TruffleFile$AttributeGroup } from '../../../../com/oracle/truffle/api/TruffleFile$AttributeGroup.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleFile$AttributeDescriptor<T extends unknown> extends Object {
    constructor(group: TruffleFile$AttributeGroup, rawType: Class<Object>, name: string)
    constructor(group: TruffleFile$AttributeGroup, name: string, clazz: Class<T>)
    // private clazz: Class<T>;
    // private group: TruffleFile$AttributeGroup;
    // private name: string;
    toString(): string;
}
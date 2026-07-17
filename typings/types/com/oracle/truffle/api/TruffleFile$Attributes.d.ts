import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { TruffleFile$AttributeDescriptor } from '../../../../com/oracle/truffle/api/TruffleFile$AttributeDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleFile$Attributes extends Object {
    constructor(queriedAttributes: TruffleFile$AttributeDescriptor<Object>[], delegate: JavaMap<string, Object>)
    // private delegate: JavaMap<string, Object>;
    // private queriedAttributes: TruffleFile$AttributeDescriptor<Object>[];
    get<T extends unknown>(descriptor: TruffleFile$AttributeDescriptor<T>): T;
}
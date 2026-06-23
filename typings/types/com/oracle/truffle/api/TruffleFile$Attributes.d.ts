import type { TruffleFile$AttributeDescriptor } from '../../../../com/oracle/truffle/api/TruffleFile$AttributeDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleFile$Attributes extends Object {
    constructor(queriedAttributes: TruffleFile$AttributeDescriptor<Object>[], delegate: { [key: string]: Object })
    // private delegate: { [key: string]: Object };
    // private queriedAttributes: TruffleFile$AttributeDescriptor<Object>[];
    get<T extends unknown>(descriptor: TruffleFile$AttributeDescriptor<T>): T;
}
import type { JsonFactory } from '../../../../../../com/azure/json/implementation/jackson/core/JsonFactory.d.ts'
import type { JsonGenerator } from '../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator.d.ts'
import type { JsonParser } from '../../../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { TreeCodec } from '../../../../../../com/azure/json/implementation/jackson/core/TreeCodec.d.ts'
import type { TreeNode } from '../../../../../../com/azure/json/implementation/jackson/core/TreeNode.d.ts'
import type { Version } from '../../../../../../com/azure/json/implementation/jackson/core/Version.d.ts'
import type { Versioned } from '../../../../../../com/azure/json/implementation/jackson/core/Versioned.d.ts'
import type { TypeReference } from '../../../../../../com/azure/json/implementation/jackson/core/type/TypeReference.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ObjectCodec extends TreeCodec implements Versioned {
    constructor()
    getFactory(): JsonFactory;
    getJsonFactory(): JsonFactory;
    readValue<T extends Object | number | string | boolean>(arg0: JsonParser, arg1: TypeReference<T>): T;
    readValue<T extends Object | number | string | boolean>(arg0: JsonParser, arg1: Class<T>): T;
    version(): Version;
    writeTree(arg0: JsonGenerator, arg1: TreeNode): void;
    writeValue(arg0: JsonGenerator, arg1: Object): void;
}
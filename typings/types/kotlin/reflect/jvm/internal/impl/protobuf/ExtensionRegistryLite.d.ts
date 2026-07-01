import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ExtensionRegistryLite$ObjectIntPair } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite$ObjectIntPair.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
export class ExtensionRegistryLite extends Object {
    static getEmptyRegistry(): ExtensionRegistryLite;
    static newInstance(): ExtensionRegistryLite;
    constructor()
    constructor(arg0: ExtensionRegistryLite)
    // private extensionsByNumber: Map<ExtensionRegistryLite$ObjectIntPair, GeneratedMessageLite$GeneratedExtension<any, Object>>;
    add(arg0: GeneratedMessageLite$GeneratedExtension<any, Object>): void;
    findLiteExtensionByNumber<ContainingType extends MessageLite>(arg0: ContainingType, arg1: number): GeneratedMessageLite$GeneratedExtension<ContainingType, Object>;
    getUnmodifiable(): ExtensionRegistryLite;
}
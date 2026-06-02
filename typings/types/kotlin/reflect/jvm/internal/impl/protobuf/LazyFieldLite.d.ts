import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
export class LazyFieldLite extends Object {
    // private bytes: number[];
    // private extensionRegistry: ExtensionRegistryLite;
    // private isDirty: boolean;
    // private value: MessageLite;
    ensureInitialized(arg0: MessageLite): void;
    getSerializedSize(): number;
    getValue(arg0: MessageLite): MessageLite;
    setValue(arg0: MessageLite): MessageLite;
}
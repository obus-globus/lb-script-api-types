import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { IExtensionProtocolMetadataStorage } from '../../../../../../../com/viaversion/viafabricplus/injection/access/core/IExtensionProtocolMetadataStorage.d.ts'
import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassicProtocolExtension } from '../../../../../../../net/raphimc/vialegacy/protocol/classic/c0_30cpetoc0_28_30/data/ClassicProtocolExtension.d.ts'
export class ExtensionProtocolMetadataStorage extends Object implements IExtensionProtocolMetadataStorage, StorableObject {
    constructor()
    readonly extensionCount: number;
    readonly receivedExtensions: number;
    // private serverExtensions: JavaMap<ClassicProtocolExtension, number>;
    readonly serverSoftwareName: string;
    addServerExtension(arg0: ClassicProtocolExtension, arg1: number): void;
    getExtensionCount(): number;
    getReceivedExtensions(): number;
    getServerSoftwareName(): string;
    hasServerExtension(arg0: ClassicProtocolExtension, ...arg1: number[]): boolean;
    incrementReceivedExtensions(): void;
    onRemove(): void;
    setExtensionCount(arg0: number): void;
    setServerSoftwareName(arg0: string): void;
    viaFabricPlus$getServerExtensions(): JavaMap<Object | null, Object>;
}
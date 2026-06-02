import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Pair } from '../../../../../../../com/viaversion/viaversion/util/Pair.d.ts'
import type { Container } from '../../../../../../../net/raphimc/viabedrock/api/model/container/Container.d.ts'
import type { BedrockItem } from '../../../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
import type { FullContainerName } from '../../../../../../../net/raphimc/viabedrock/protocol/model/FullContainerName.d.ts'
export class BundleContainer extends Container {
    constructor(arg0: UserConnection, arg1: FullContainerName)
    // private containerName: FullContainerName;
    // private findBundleInContainer(arg0: Container): number;
    // private findHoldingContainer(): Pair<Container, number>;
    getJavaBundleItems(): Item[];
    getJavaItem(arg0: number): Item;
    getJavaItems(): Item[];
    javaContainerId(): number;
    javaSlot(arg0: number): number;
    setItem(arg0: number, arg1: BedrockItem): boolean;
    setItems(arg0: BedrockItem[]): boolean;
}
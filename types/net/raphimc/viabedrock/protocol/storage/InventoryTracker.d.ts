import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { IntObjectPair } from '../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntObjectPair.d.ts'
import type { Form } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/Form.d.ts'
import type { Container } from '../../../../../net/raphimc/viabedrock/api/model/container/Container.d.ts'
import type { BundleContainer } from '../../../../../net/raphimc/viabedrock/api/model/container/dynamic/BundleContainer.d.ts'
import type { ArmorContainer } from '../../../../../net/raphimc/viabedrock/api/model/container/player/ArmorContainer.d.ts'
import type { HudContainer } from '../../../../../net/raphimc/viabedrock/api/model/container/player/HudContainer.d.ts'
import type { InventoryContainer } from '../../../../../net/raphimc/viabedrock/api/model/container/player/InventoryContainer.d.ts'
import type { OffhandContainer } from '../../../../../net/raphimc/viabedrock/api/model/container/player/OffhandContainer.d.ts'
import type { BedrockItem } from '../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
import type { FullContainerName } from '../../../../../net/raphimc/viabedrock/protocol/model/FullContainerName.d.ts'
export class InventoryTracker extends StoredObject {
    constructor(arg0: UserConnection)
    readonly armorContainer: ArmorContainer;
    readonly currentContainer: Container;
    readonly currentForm: IntObjectPair<Form>;
    // private dynamicContainerRegistry: Map<FullContainerName, BundleContainer>;
    readonly hudContainer: HudContainer;
    readonly inventoryContainer: InventoryContainer;
    readonly offhandContainer: OffhandContainer;
    readonly pendingCloseContainer: Container;
    closeCurrentForm(): void;
    // private forceCloseCurrentContainer(): void;
    getArmorContainer(): ArmorContainer;
    getContainerClientbound(arg0: number, arg1: FullContainerName, arg2: BedrockItem): Container;
    getContainerServerbound(arg0: number): Container;
    getCurrentContainer(): Container;
    getCurrentForm(): IntObjectPair<Form>;
    getDynamicContainer(arg0: FullContainerName): BundleContainer;
    getHudContainer(): HudContainer;
    getInventoryContainer(): InventoryContainer;
    getOffhandContainer(): OffhandContainer;
    getPendingCloseContainer(): Container;
    isAnyScreenOpen(): boolean;
    isContainerOpen(): boolean;
    markPendingClose(arg0: Container): void;
    removeDynamicContainer(arg0: FullContainerName): void;
    setCurrentContainer(arg0: Container): void;
    setCurrentContainerClosed(arg0: boolean): void;
    setCurrentForm(arg0: IntObjectPair<Form>): void;
    tick(): void;
}
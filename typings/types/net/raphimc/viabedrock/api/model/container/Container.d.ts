import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { TextComponent } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContainerType } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ContainerType.d.ts'
import type { ContainerInput } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/java/generated/ContainerInput.d.ts'
import type { BedrockItem } from '../../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
export abstract class Container extends Object {
    constructor(arg0: UserConnection, arg1: number, arg2: ContainerType, arg3: TextComponent, arg4: BlockPosition, arg5: BedrockItem[], arg6: string[])
    constructor(arg0: UserConnection, arg1: number, arg2: ContainerType, arg3: TextComponent, arg4: BlockPosition, arg5: number, ...arg6: string[])
    // private containerId: number;
    readonly items: BedrockItem[];
    // private position: BlockPosition;
    // private title: TextComponent;
    // private type: ContainerType;
    // private user: UserConnection;
    // private validBlockTags: string[];
    clearItems(): void;
    containerId(): number;
    getItem(arg0: number): BedrockItem;
    getItems(): BedrockItem[];
    getJavaItem(arg0: number): Item;
    getJavaItems(): Item[];
    handleClick(arg0: number, arg1: number, arg2: number, arg3: ContainerInput): boolean;
    isValidBlockTag(arg0: string): boolean;
    javaContainerId(): number;
    javaSlot(arg0: number): number;
    onSlotChanged(arg0: number, arg1: BedrockItem, arg2: BedrockItem): void;
    position(): BlockPosition;
    setItem(arg0: number, arg1: BedrockItem): boolean;
    setItems(arg0: BedrockItem[]): boolean;
    size(): number;
    title(): TextComponent;
    type(): ContainerType;
}
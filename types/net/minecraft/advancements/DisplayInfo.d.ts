import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AdvancementType } from '../../../net/minecraft/advancements/AdvancementType.d.ts'
import type { ClientAsset$ResourceTexture } from '../../../net/minecraft/core/ClientAsset$ResourceTexture.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ItemStackTemplate } from '../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
export class DisplayInfo extends Object {
    static CODEC: Codec<DisplayInfo>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DisplayInfo>;
    constructor(icon: ItemStackTemplate, title: Component, description: Component, background: Optional<ClientAsset$ResourceTexture>, type: AdvancementType, showToast: boolean, announceChat: boolean, hidden: boolean)
    // private announceChat: boolean;
    readonly background: Optional<ClientAsset$ResourceTexture>;
    readonly description: Component;
    readonly hidden: boolean;
    readonly icon: ItemStackTemplate;
    // private showToast: boolean;
    readonly title: Component;
    readonly type: AdvancementType;
    readonly x: number;
    readonly y: number;
    getBackground(): Optional<ClientAsset$ResourceTexture>;
    getDescription(): Component;
    getIcon(): ItemStackTemplate;
    getTitle(): Component;
    getType(): AdvancementType;
    getX(): number;
    getY(): number;
    isHidden(): boolean;
    // private serializeToNetwork(output: RegistryFriendlyByteBuf): void;
    setLocation(x: number, y: number): void;
    shouldAnnounceChat(): boolean;
    shouldShowToast(): boolean;
}
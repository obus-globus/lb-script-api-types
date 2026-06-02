import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { MerchantOffer } from '../../../../../net/minecraft/world/item/trading/MerchantOffer.d.ts'
export interface Merchant extends Object{
    canRestock(): boolean;
    getNotifyTradeSound(): SoundEvent;
    getOffers(): (Object | null)[];
    getTradingPlayer(): Player;
    getVillagerXp(): number;
    isClientSide(): boolean;
    notifyTrade(offer: MerchantOffer): void;
    notifyTradeUpdated(itemStack: ItemStack): void;
    openTradingScreen(player: Player, title: Component, level: number): void;
    overrideOffers(offers: (Object | null)[]): void;
    overrideXp(xp: number): void;
    setTradingPlayer(player: Player): void;
    showProgressBar(): boolean;
    stillValid(player: Player): boolean;
}
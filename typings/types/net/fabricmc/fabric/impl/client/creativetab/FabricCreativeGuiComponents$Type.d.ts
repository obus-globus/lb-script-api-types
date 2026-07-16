import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { CreativeModeInventoryScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/CreativeModeInventoryScreen.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class FabricCreativeGuiComponents$Type extends Enum<FabricCreativeGuiComponents$Type> {
    static NEXT: FabricCreativeGuiComponents$Type;
    static PREVIOUS: FabricCreativeGuiComponents$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FabricCreativeGuiComponents$Type;
    static values(): FabricCreativeGuiComponents$Type[];
    private constructor(arg2: Component, arg3: (param0: CreativeModeInventoryScreen) => void, arg4: (param0: CreativeModeInventoryScreen) => boolean)
    // private clickConsumer: (param0: CreativeModeInventoryScreen) => void;
    // private component: Component;
    // private isEnabled: (param0: CreativeModeInventoryScreen) => boolean;
    name(): "NEXT" | "PREVIOUS";
}
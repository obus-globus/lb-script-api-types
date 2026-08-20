import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { EventListener } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Component } from '../../../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Options Define when the CA should run. Only tick is the most legit.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.kt:28}
 */
export abstract class Trigger extends Object implements EventListener {
    constructor(name: string, default_: boolean)
    readonly allowsCaching: boolean;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    readonly default: boolean;
    readonly enabled: boolean;
    readonly name: string;
    option: Value<boolean>;
    readonly running: boolean;
    children(): EventListener[];
    parent(): EventListener | null;
    unregister(): void;
}
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { EventListener } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * Options Define when the CA should run. Only tick is the most legit.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.kt:28}
 */
export abstract class Trigger extends Object implements EventListener {
    constructor(name: string, default_: boolean)
    readonly allowsCaching: boolean;
    readonly default: boolean;
    readonly enabled: boolean;
    readonly name: string;
    option: Value<boolean>;
    readonly running: boolean;
    children(): EventListener[];
    parent(): EventListener | null;
    unregister(): void;
}
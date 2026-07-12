import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { EventListener } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * Options Define when the CA should run. Only tick is the most legit.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.kt:28}
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
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { EventListener } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * Options Define when the CA should run. Only tick is the most legit.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.kt:25}
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
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { Clicker$ClickPatterns } from '../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker$ClickPatterns.d.ts'
import type { Clicker$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker$Companion.d.ts'
import type { ItemCooldown } from '../../../../../net/ccbluex/liquidbounce/utils/clicking/ItemCooldown.d.ts'
import type { RollingClickArray } from '../../../../../net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.d.ts'
import type { KeyMapping } from '../../../../../net/minecraft/client/KeyMapping.d.ts'
/**
 * An attack scheduler
 *
 * Minecraft is counting every click until it handles all inputs.
 * code:
 * while (this.options.keyAttack.wasPressed()) {
 *     this.doAttack();
 * }
 *
 * @see {@link Minecraft.handleKeybinds}

We are simulating this behaviour by calculating how many times we could have been clicked in the meantime of a tick.
This allows us to predict future actions and behave accordingly.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/Clicker.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/Clicker.kt:59}
 */
export class Clicker<T extends EventListener> extends ValueGroup implements EventListener {
    static Companion: Clicker$Companion;
    constructor(parent: T, keyBinding: KeyMapping, itemCooldown: ItemCooldown | null, maxCps: number, name: string, simulateAttackKeyDown: boolean)
    // private attackCooldown: Value<boolean> | null;
    readonly clickAmount: number | null;
    // private clickArray: RollingClickArray;
    // private cps: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getCps(): { start: number; endInclusive: number; step: number };
    // private gameHandler: EventHook<GameTickEvent>;
    /*not mapped: */ isClickTick(): boolean;
    readonly itemCooldown: ItemCooldown | null;
    readonly keyBinding: KeyMapping;
    // private /*not mapped: */ getPassesAttackCooldown(): boolean;
    // private pattern: Clicker$ClickPatterns;
    // private /*not mapped: */ getPattern(): Clicker$ClickPatterns;
    readonly ticksSinceLastClick: number;
    readonly ticksUntilClick: number;
    /**
     * Returns true when a click attempt can be executed right now.
     * This uses the same gating logic as {@link click} before invoking {@link block}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/Clicker.kt#L204 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/Clicker.kt:204}
     */
    canExecuteClickNow(): boolean;
    children(): EventListener[];
    /**
     * Clicks {@link cps} times per call (tick). If the cooldown is not passed, it will not click.
     * {@link block} should return true if the click was successful. Otherwise, it will not count as a click.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/Clicker.kt#L173 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/Clicker.kt:173}
     */
    click(block: () => boolean): void;
    // private fill(): void;
    getClickAmount(tick: number): number;
    // private isEnforcedClick(tick: number): boolean;
    parent(): EventListener | null;
    parent(): T;
    unregister(): void;
    willClickAt(tick: number): boolean;
}
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Toggleable } from '../../../../../../net/ccbluex/liquidbounce/features/misc/Toggleable.d.ts'
import type { MinecraftShortcuts } from '../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
/**
 * A {@link ToggleableValueGroup} has a state that can be toggled on and off. It also allows you
 * to register event handlers that are only active when the state is on,
 * it also features {@link onEnabled} and {@link onDisabled} which are called when the state is toggled.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.kt:34}
 */
export abstract class ToggleableValueGroup extends ValueGroup implements EventListener, Toggleable, MinecraftShortcuts {
    constructor(parent: EventListener | null, name: string, enabled: boolean, aliases: string[])
    enabled: boolean;
    readonly enabledValue: Value<boolean>;
    /**
     * Because we pass the parent to the Listenable, we can simply
     * call the super.handleEvents() and it will return false if the upper-listenable is disabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.kt#L89 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.kt:89}
     */
    readonly running: boolean;
    children(): EventListener[];
    protected choices<T extends Mode>(name: string, active: T, choices: T[]): ModeValueGroup<T>;
    protected choices(name: string, activeIndex: number, choicesCallback: (param0: ModeValueGroup<T>) => T[]): ModeValueGroup<T>;
    onDisabled(): void;
    onEnabled(): void;
    onEnabledValueRegistration(value: Value<boolean>): Value<boolean>;
    onToggled(state: boolean): boolean;
    onToggled(state: boolean, isParentUpdate: boolean): boolean;
    parent(): EventListener | null;
    unregister(): void;
}
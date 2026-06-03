import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { MinecraftShortcuts } from '../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
export abstract class Mode extends ValueGroup implements Tagged, EventListener, MinecraftShortcuts {
    static Companion: Tagged$Companion;
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    constructor(name: string, aliases: string[])
    /*not mapped: */ isSelected$liquidbounce(): boolean;
    readonly parent: ModeValueGroup<Object>;
    /**
     * We check if the parent is active and if the mode is active, if so
     * we handle the events.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt#L128 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt:128}
     */
    readonly running: boolean;
    readonly tag: string;
    readonly tagAliases: string[];
    children(): EventListener[];
    disable(): void;
    enable(): void;
    protected modes<T extends Mode>(name: string, active: T, choices: T[]): ModeValueGroup<T>;
    protected modes(name: string, activeIndex: number, choicesCallback: (param0: ModeValueGroup<T>) => T[]): ModeValueGroup<T>;
    protected modes<T extends Mode>(eventListener: EventListener, name: string, active: T, modes: T[]): ModeValueGroup<T>;
    protected modes(eventListener: EventListener, name: string, activeCallback: (param0: T[]) => kotlin.Int, modesCallback: (param0: ModeValueGroup<T>) => T[]): ModeValueGroup<T>;
    protected modes(eventListener: EventListener, name: string, activeIndex: number, choicesCallback: (param0: ModeValueGroup<T>) => T[]): ModeValueGroup<T>;
    parent(): EventListener;
    parent(): EventListener | null;
    unregister(): void;
}
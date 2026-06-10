import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiPredicate } from '../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Regex } from '../../../../../../../kotlin/text/Regex.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ModuleGUICloser$Mode extends Enum<ModuleGUICloser$Mode> implements BiPredicate<Regex, Component>, Tagged {
    static CONTAINS: ModuleGUICloser$Mode;
    static Companion: Tagged$Companion;
    static MATCHES: ModuleGUICloser$Mode;
    static getEntries(): ModuleGUICloser$Mode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleGUICloser$Mode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    and(arg0: (param0: Regex, param1: Component) => boolean): (param0: Regex, param1: Component) => boolean;
    negate(): (param0: Regex, param1: Component) => boolean;
    or(arg0: (param0: Regex, param1: Component) => boolean): (param0: Regex, param1: Component) => boolean;
    test(regex: Regex, text: Component): boolean;
    name(): "MATCHES" | "CONTAINS";
}
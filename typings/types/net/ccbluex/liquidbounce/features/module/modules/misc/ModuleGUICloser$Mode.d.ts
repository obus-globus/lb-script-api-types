import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Regex } from '../../../../../../../kotlin/text/Regex.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ModuleGUICloser$Mode extends Enum<ModuleGUICloser$Mode> implements Tagged {
    static CONTAINS: ModuleGUICloser$Mode;
    static Companion: Tagged$Companion;
    static MATCHES: ModuleGUICloser$Mode;
    static getEntries(): ModuleGUICloser$Mode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleGUICloser$Mode;
    static values(): ModuleGUICloser$Mode[];
    private constructor(tag: string)
    readonly tag: string;
    test(regex: Regex, text: Component): boolean;
    name(): "MATCHES" | "CONTAINS";
}
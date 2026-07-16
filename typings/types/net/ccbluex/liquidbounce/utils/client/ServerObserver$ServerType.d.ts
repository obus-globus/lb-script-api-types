import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ServerObserver$ServerType extends Enum<ServerObserver$ServerType> implements Tagged {
    static CRACKED: ServerObserver$ServerType;
    static Companion: Tagged$Companion;
    static PREMIUM: ServerObserver$ServerType;
    static getEntries(): ServerObserver$ServerType[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ServerObserver$ServerType;
    static values(): ServerObserver$ServerType[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PREMIUM" | "CRACKED";
}
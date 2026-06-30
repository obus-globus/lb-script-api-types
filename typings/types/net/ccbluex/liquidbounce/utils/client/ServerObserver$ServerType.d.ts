import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ServerObserver$ServerType extends Enum<ServerObserver$ServerType> implements Tagged {
    static CRACKED: ServerObserver$ServerType;
    static Companion: Tagged$Companion;
    static PREMIUM: ServerObserver$ServerType;
    static getEntries(): ServerObserver$ServerType[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerObserver$ServerType;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PREMIUM" | "CRACKED";
}
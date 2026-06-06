import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ServerObserver$ServerType extends Enum<ServerObserver$ServerType> implements Tagged {
    /**
     * Allows premium and cracked players to join.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ServerObserver.kt#L359 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ServerObserver.kt:359}
     */
    static CRACKED: ServerObserver$ServerType;
    static Companion: Tagged$Companion;
    /**
     * Allows only premium players to join.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ServerObserver.kt#L354 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ServerObserver.kt:354}
     */
    static PREMIUM: ServerObserver$ServerType;
    static getEntries(): ServerObserver$ServerType[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerObserver$ServerType;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PREMIUM" | "CRACKED";
}
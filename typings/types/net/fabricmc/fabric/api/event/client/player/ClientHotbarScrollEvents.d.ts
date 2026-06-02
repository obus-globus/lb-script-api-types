import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ClientHotbarScrollEvents$After } from '../../../../../../../net/fabricmc/fabric/api/event/client/player/ClientHotbarScrollEvents$After.d.ts'
import type { ClientHotbarScrollEvents$Allow } from '../../../../../../../net/fabricmc/fabric/api/event/client/player/ClientHotbarScrollEvents$Allow.d.ts'
import type { ClientHotbarScrollEvents$Before } from '../../../../../../../net/fabricmc/fabric/api/event/client/player/ClientHotbarScrollEvents$Before.d.ts'
export class ClientHotbarScrollEvents extends Object {
    static AFTER: Event<(param0: (Object | null)[], param1: number, param2: number, param3: number, param4: number) => void>;
    static ALLOW: Event<(param0: (Object | null)[], param1: number, param2: number, param3: number, param4: number) => kotlin.Boolean>;
    static BEFORE: Event<(param0: (Object | null)[], param1: number, param2: number, param3: number, param4: number) => void>;
    private constructor()
}
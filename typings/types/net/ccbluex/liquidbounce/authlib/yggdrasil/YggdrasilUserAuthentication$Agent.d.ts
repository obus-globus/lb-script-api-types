import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class YggdrasilUserAuthentication$Agent extends Enum<YggdrasilUserAuthentication$Agent> {
    static MINECRAFT: YggdrasilUserAuthentication$Agent;
    static getEntries(): YggdrasilUserAuthentication$Agent[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): YggdrasilUserAuthentication$Agent;
    static values(): (Object | null)[];
    private constructor(agentName: string, version: number)
    readonly agentName: string;
    readonly version: number;
    name(): "MINECRAFT";
}
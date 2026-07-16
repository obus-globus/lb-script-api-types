import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class YggdrasilUserAuthentication$Agent extends Enum<YggdrasilUserAuthentication$Agent> {
    static MINECRAFT: YggdrasilUserAuthentication$Agent;
    static getEntries(): YggdrasilUserAuthentication$Agent[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): YggdrasilUserAuthentication$Agent;
    static values(): YggdrasilUserAuthentication$Agent[];
    private constructor(agentName: string, version: number)
    readonly agentName: string;
    readonly version: number;
    name(): "MINECRAFT";
}
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ClientPlayMode extends Enum<ClientPlayMode> {
    static ExitLevel: ClientPlayMode;
    static ExitLevelLivingRoom_Deprecated: ClientPlayMode;
    static LivingRoom_Deprecated: ClientPlayMode;
    static Normal: ClientPlayMode;
    static Placement_Deprecated: ClientPlayMode;
    static Reality_Deprecated: ClientPlayMode;
    static Screen: ClientPlayMode;
    static Teaser: ClientPlayMode;
    static Viewer_Deprecated: ClientPlayMode;
    static getByName(paramarg0: string): ClientPlayMode;
    static getByName(paramarg0: string, paramarg1: ClientPlayMode): ClientPlayMode;
    static getByValue(paramarg0: number): ClientPlayMode;
    static getByValue(paramarg0: number, paramarg1: ClientPlayMode): ClientPlayMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientPlayMode;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ClientPlayMode)
    readonly value: number;
    getValue(): number;
    name(): "Normal" | "Teaser" | "Screen" | "Viewer_Deprecated" | "Reality_Deprecated" | "Placement_Deprecated" | "LivingRoom_Deprecated" | "ExitLevel" | "ExitLevelLivingRoom_Deprecated";
}
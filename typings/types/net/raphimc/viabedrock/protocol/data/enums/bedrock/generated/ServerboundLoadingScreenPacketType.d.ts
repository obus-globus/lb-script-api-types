import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ServerboundLoadingScreenPacketType extends Enum<ServerboundLoadingScreenPacketType> {
    static EndLoadingScreen: ServerboundLoadingScreenPacketType;
    static StartLoadingScreen: ServerboundLoadingScreenPacketType;
    static Unknown: ServerboundLoadingScreenPacketType;
    static getByName(paramarg0: string): ServerboundLoadingScreenPacketType;
    static getByName(paramarg0: string, paramarg1: ServerboundLoadingScreenPacketType): ServerboundLoadingScreenPacketType;
    static getByValue(paramarg0: number): ServerboundLoadingScreenPacketType;
    static getByValue(paramarg0: number, paramarg1: ServerboundLoadingScreenPacketType): ServerboundLoadingScreenPacketType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundLoadingScreenPacketType;
    static values(): ServerboundLoadingScreenPacketType[];
    private constructor(arg2: number)
    private constructor(arg2: ServerboundLoadingScreenPacketType)
    readonly value: number;
    getValue(): number;
    name(): "Unknown" | "StartLoadingScreen" | "EndLoadingScreen";
}
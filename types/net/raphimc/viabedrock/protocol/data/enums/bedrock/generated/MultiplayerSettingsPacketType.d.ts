import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class MultiplayerSettingsPacketType extends Enum<MultiplayerSettingsPacketType> {
    static DisableMultiplayer: MultiplayerSettingsPacketType;
    static EnableMultiplayer: MultiplayerSettingsPacketType;
    static RefreshJoincode: MultiplayerSettingsPacketType;
    static getByName(paramarg0: string): MultiplayerSettingsPacketType;
    static getByName(paramarg0: string, paramarg1: MultiplayerSettingsPacketType): MultiplayerSettingsPacketType;
    static getByValue(paramarg0: number): MultiplayerSettingsPacketType;
    static getByValue(paramarg0: number, paramarg1: MultiplayerSettingsPacketType): MultiplayerSettingsPacketType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MultiplayerSettingsPacketType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: MultiplayerSettingsPacketType)
    readonly value: number;
    getValue(): number;
    name(): "EnableMultiplayer" | "DisableMultiplayer" | "RefreshJoincode";
}
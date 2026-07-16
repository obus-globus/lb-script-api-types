import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Social_GamePublishSetting extends Enum<Social_GamePublishSetting> {
    static FriendsOfFriends: Social_GamePublishSetting;
    static FriendsOnly: Social_GamePublishSetting;
    static InviteOnly: Social_GamePublishSetting;
    static NoMultiPlay: Social_GamePublishSetting;
    static Public: Social_GamePublishSetting;
    static getByName(paramarg0: string): Social_GamePublishSetting;
    static getByName(paramarg0: string, paramarg1: Social_GamePublishSetting): Social_GamePublishSetting;
    static getByValue(paramarg0: number): Social_GamePublishSetting;
    static getByValue(paramarg0: number, paramarg1: Social_GamePublishSetting): Social_GamePublishSetting;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Social_GamePublishSetting;
    static values(): Social_GamePublishSetting[];
    private constructor(arg2: number)
    private constructor(arg2: Social_GamePublishSetting)
    readonly value: number;
    getValue(): number;
    name(): "NoMultiPlay" | "InviteOnly" | "FriendsOnly" | "FriendsOfFriends" | "Public";
}
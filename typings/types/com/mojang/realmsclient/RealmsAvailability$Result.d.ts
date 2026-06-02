import type { RealmsAvailability$Type } from '../../../com/mojang/realmsclient/RealmsAvailability$Type.d.ts'
import type { RealmsServiceException } from '../../../com/mojang/realmsclient/exception/RealmsServiceException.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Screen } from '../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class RealmsAvailability$Result extends Record {
    constructor(type: RealmsAvailability$Type)
    constructor(type: RealmsAvailability$Type, exception: RealmsServiceException)
    constructor(exception: RealmsServiceException)
    // private exception: RealmsServiceException;
    // private type: RealmsAvailability$Type;
    createErrorScreen(lastScreen: Screen): Screen;
    equals(o: Object | null): boolean;
    exception(): RealmsServiceException;
    hashCode(): number;
    toString(): string;
    type(): RealmsAvailability$Type;
}
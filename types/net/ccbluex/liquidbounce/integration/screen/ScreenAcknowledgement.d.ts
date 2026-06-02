import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Chronometer } from '../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
export class ScreenAcknowledgement extends Object {
    constructor(since: Chronometer, confirmed: boolean)
    confirmed: boolean;
    /*not mapped: */ isDesynced(): boolean;
    readonly since: Chronometer;
    confirm(): void;
    reset(): void;
}
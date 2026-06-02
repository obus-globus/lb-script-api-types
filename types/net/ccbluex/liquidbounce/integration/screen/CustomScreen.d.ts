import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CustomScreenType } from '../../../../../net/ccbluex/liquidbounce/integration/screen/CustomScreenType.d.ts'
import type { Chronometer } from '../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
export class CustomScreen extends Object {
    constructor(type: CustomScreenType, openSince: Chronometer)
    readonly openSince: Chronometer;
    readonly type: CustomScreenType;
    component1(): CustomScreenType;
    component2(): Chronometer;
    copy(type: CustomScreenType, openSince: Chronometer): CustomScreen;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
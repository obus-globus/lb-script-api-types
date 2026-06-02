import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BrowserState } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserState.d.ts'
export class BrowserState$Success extends BrowserState {
    constructor(httpStatusCode: number)
    readonly httpStatusCode: number;
    component1(): number;
    copy(httpStatusCode: number): BrowserState$Success;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
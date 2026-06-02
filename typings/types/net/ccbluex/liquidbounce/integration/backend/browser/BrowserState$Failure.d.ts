import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BrowserState } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserState.d.ts'
export class BrowserState$Failure extends BrowserState {
    constructor(errorCode: number, errorText: string, failedUrl: string)
    readonly errorCode: number;
    readonly errorText: string;
    readonly failedUrl: string;
    component1(): number;
    component2(): string;
    component3(): string;
    copy(errorCode: number, errorText: string, failedUrl: string): BrowserState$Failure;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
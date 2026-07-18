import type { CloseReason$Codes } from '../../../io/ktor/websocket/CloseReason$Codes.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CloseReason extends Object {
    constructor(code: CloseReason$Codes, message: string)
    constructor(code: number, message: string)
    readonly code: number;
    readonly knownReason: CloseReason$Codes | null;
    readonly message: string;
    component1(): number;
    component2(): string;
    copy(code: number, message: string): CloseReason;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
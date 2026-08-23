import type { JsonElement } from '../../../../../../../com/google/gson/JsonElement.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JoinInfo extends Record {
    constructor(value: JsonElement, invites: string[] | null)
    // private invites: string[] | null;
    /*not mapped: */ invites(): string[] | null;
    // private value: JsonElement;
    /*not mapped: */ value(): JsonElement;
    component1(): JsonElement;
    component2(): string[] | null;
    copy(value: JsonElement, invites: string[] | null): JoinInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
import type { Record } from '../../../java/lang/Record.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class DisconnectionDetails extends Record {
    constructor(reason: Component)
    constructor(reason: Component, report: Optional<Path[]>, bugReportLink: Optional<URI>)
    // private bugReportLink: Optional<URI>;
    // private reason: Component;
    // private report: Optional<Path[]>;
    bugReportLink(): Optional<URI>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    reason(): Component;
    report(): Optional<Path[]>;
    toString(): string;
}
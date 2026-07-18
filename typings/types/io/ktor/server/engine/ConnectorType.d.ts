import type { ConnectorType$Companion } from '../../../../io/ktor/server/engine/ConnectorType$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConnectorType extends Object {
    static Companion: ConnectorType$Companion;
    constructor(name: string)
    readonly name: string;
    component1(): string;
    copy(name: string): ConnectorType;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
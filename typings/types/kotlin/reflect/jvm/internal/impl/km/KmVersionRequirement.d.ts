import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmVersion } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmVersion.d.ts'
import type { KmVersionRequirementLevel } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmVersionRequirementLevel.d.ts'
import type { KmVersionRequirementVersionKind } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmVersionRequirementVersionKind.d.ts'
export class KmVersionRequirement extends Object {
    constructor()
    readonly errorCode: number;
    kind: KmVersionRequirementVersionKind;
    level: KmVersionRequirementLevel;
    readonly message: string;
    version: KmVersion;
    getErrorCode(): number;
    getKind(): KmVersionRequirementVersionKind;
    getLevel(): KmVersionRequirementLevel;
    getMessage(): string;
    getVersion(): KmVersion;
    setErrorCode(arg0: number): void;
    setKind(arg0: KmVersionRequirementVersionKind): void;
    setLevel(arg0: KmVersionRequirementLevel): void;
    setMessage(arg0: string): void;
    setVersion(arg0: KmVersion): void;
    toString(): string;
}
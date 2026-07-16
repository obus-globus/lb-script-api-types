import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PackFormat } from '../../../../../net/minecraft/server/packs/metadata/pack/PackFormat.d.ts'
import type { InclusiveRange } from '../../../../../net/minecraft/util/InclusiveRange.d.ts'
export class PackCompatibility extends Enum<PackCompatibility> {
    static COMPATIBLE: PackCompatibility;
    static TOO_NEW: PackCompatibility;
    static TOO_OLD: PackCompatibility;
    static UNKNOWN: PackCompatibility;
    static UNKNOWN_VERSION: number;
    static forVersion(parampackDeclaredVersions: InclusiveRange<PackFormat>, paramgameSupportedVersion: PackFormat): PackCompatibility;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PackCompatibility;
    static values(): PackCompatibility[];
    private constructor(key: string)
    readonly confirmation: Component;
    readonly description: Component;
    getConfirmation(): Component;
    getDescription(): Component;
    isCompatible(): boolean;
    name(): "TOO_OLD" | "TOO_NEW" | "UNKNOWN" | "COMPATIBLE";
}